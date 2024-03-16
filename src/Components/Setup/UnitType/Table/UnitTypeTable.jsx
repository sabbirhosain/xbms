import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../Data/Images';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import axios from 'axios';
import { unittypes_list } from '../../../../ApiURL';

const UnitTypeTable = () => {
  const { getUnitType, deleteUnitType,s } = useContextDataProvider();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [unitTypesList, setUnitTypesList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = { noRowsPerPage: true };
  useEffect(() => { unitTypesListFetch(1) }, [])


  const unitTypesListFetch = async (page) => {
    try {
      setIsLoaded(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${unittypes_list}?page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setUnitTypesList(response.data.results);
      setTotalRows(response.data.count);
      setIsLoaded(false);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }


  const handlePageChange = page => {
    unitTypesListFetch(page);
  };


  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "UnitType Name",
      selector: row => row.name,
      width: "800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_unitType" onClick={() => getUnitType(row.id)}> <img src={edit} /></button>
        <button onClick={() => deleteUnitType(row.id)}><img src={trash} /></button>
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
          data={unitTypesList}
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

export default UnitTypeTable