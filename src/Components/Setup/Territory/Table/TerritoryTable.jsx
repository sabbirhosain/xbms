import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { terrritori_list } from '../../../../ApiURL';

const TerritoryTable = () => {
  const { delete_terrritori, update_terrritori, } = useContextDataProvider();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [terrritoriList, setTerrritoriList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = { noRowsPerPage: true };
  useEffect(() => {
    terrritoriFetch(1);
  }, [])


  const terrritoriFetch = async (page) => {
    try {
      setIsLoaded(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${terrritori_list}?page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setTerrritoriList(response.data.results);
      setTotalRows(response.data.count);
      setIsLoaded(false);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }


  const handlePageChange = page => {
    terrritoriFetch(page);
  };


  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Territory Name",
      selector: row => row.name,
      width: "800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_territory" onClick={() => update_terrritori(row.id)}> <img src={edit} /></button>
        <button onClick={() => delete_terrritori(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (

      <>
        <DataTable
          columns={columns}
          data={terrritoriList}
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

export default TerritoryTable