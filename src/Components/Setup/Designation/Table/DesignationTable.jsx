import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';

const DesignationTable = () => {
  const { getDesignations, deleteDesignations, isLoadedDesignations, designationsError, designationsList, totalRowsDesignations, paginationComponentOptionsDesignations, designationsHandlePageChange, } = useContextDataProvider();


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

  if (designationsError) {
    return <div>Error: {designationsError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={designationsList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsDesignations}
          progressPending={isLoadedDesignations}
          paginationTotalRows={totalRowsDesignations}
          onChangePage={designationsHandlePageChange}
        >
        </DataTable >
      </>
    )
  }
}

export default DesignationTable