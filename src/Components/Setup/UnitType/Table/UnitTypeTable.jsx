import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../Data/Images';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';

const UnitTypeTable = () => {
  const { getUnitType, deleteUnitType, isLoadedUnitType, unitTypeError, unitTypesList, totalRowsUnitType, paginationComponentOptionsUnitType, unitTypeHandlePageChange, } = useContextDataProvider();


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


  if (unitTypeError) {
    return <div>Error: {unitTypeError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={unitTypesList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsUnitType}
          progressPending={isLoadedUnitType}
          paginationTotalRows={totalRowsUnitType}
          onChangePage={unitTypeHandlePageChange}
        >
        </DataTable >
      </>
    )
  }
}

export default UnitTypeTable