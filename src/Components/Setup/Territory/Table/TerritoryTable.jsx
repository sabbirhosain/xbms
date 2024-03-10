import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';

const TerritoryTable = () => {
  const { territoryData } = useContextDataProvider();

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
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];


  return (
    <div>
      <DataTable columns={columns} data={territoryData}></DataTable>
    </div>
  )
}

export default TerritoryTable