import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import UpdateTerritoryModal from '../Modal/UpdateTerritoryModal copy';
const TerritoryTable = () => {
  const { territoryData, submitForm, delete_terrritori, update_terrritori } = useContextDataProvider();



  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Territory Name",
      selector: row => row.name,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_territory" onClick={() => update_terrritori(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => delete_terrritori(row.id)}><img src={trash} /></button>
      </>

    }
  ];


  return (
    <div>
      <DataTable columns={columns} data={territoryData}></DataTable>
      <UpdateTerritoryModal />
    </div>
  )
}

export default TerritoryTable