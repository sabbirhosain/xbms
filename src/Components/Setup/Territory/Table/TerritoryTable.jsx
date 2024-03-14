import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import UpdateTerritoryModal from '../Modal/UpdateTerritoryModal copy';
import { useEffect, useState } from 'react';
import axios from 'axios';




const TerritoryTable = () => {
  const { delete_terrritori, update_terrritori, } = useContextDataProvider();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage])



  const fetchData = async (page, per_page) => {
    try {
      setIsLoaded(false);

      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`https://xms.pythonanywhere.com/api/territories/?page=${page}&per_page=${per_page}`, { headers: { Authorization: `Bearer ${token.access}` } });

      setItems(response.data.results);
      setTotalRows(response.data.count);
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }


  const handlePageChange = page => {
    fetchData(page, perPage);
  };


  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }


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
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

      <>
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        >
        </DataTable >

        <UpdateTerritoryModal />
      </>
    )
  }
}

export default TerritoryTable