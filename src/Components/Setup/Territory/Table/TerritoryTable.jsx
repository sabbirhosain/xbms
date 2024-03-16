import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';

const TerritoryTable = () => {
  const { delete_terrritori, update_terrritori, isLoadedTerritori, territoriError, territoriList, totalRowsTerritori, paginationComponentOptionsTerritori, territoriHandlePageChange } = useContextDataProvider();


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

  if (territoriError) {
    return <div>Error: {territoriError.message}</div>;
  } else {
    return (

      <>
        <DataTable
          columns={columns}
          data={territoriList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsTerritori}
          progressPending={isLoadedTerritori}
          paginationTotalRows={totalRowsTerritori}
          onChangePage={territoriHandlePageChange}
        >
        </DataTable >

      </>
    )
  }
}

export default TerritoryTable