import React, { useEffect, useState } from 'react'
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { designations_list } from '../../../../ApiURL';
import axios from 'axios';

const DesignationTable = () => {
  const { getDesignations, deleteDesignations } = useContextDataProvider();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [designationsList, setDesignationsList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = { noRowsPerPage: true };
  useEffect(() => { designationsFetch(1) }, [])


  const designationsFetch = async (page) => {
    try {
      setIsLoaded(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${designations_list}?page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setDesignationsList(response.data.results);
      setTotalRows(response.data.count);
      setIsLoaded(false);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }


  const handlePageChange = page => {
    designationsFetch(page);
  };




  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Designation Name",
      selector: row => row.name,
      width: "800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_designation" onClick={() => getDesignations(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => deleteDesignations(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={designationsList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          progressPending={isLoaded}
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
        >
        </DataTable >
      </>
    )
  }
}

export default DesignationTable