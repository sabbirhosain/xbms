import DataTable from "react-data-table-component";
import { edit, trash } from "../../../../Data/Images";
import { useUserDataProvider } from "../../../../ContextApi/UsersContextApi";

const SuppliersListTable = () => {
  const { suppliersList, suppliersError, paginationComponentOptionsSuppliers, totalRowsSuppliers, isLoadedSuppliers, suppliersHandlePageChange, deleteSuppliers, getSuppliers } = useUserDataProvider()
  const generateSerialNumber = (index) => index + 1;
  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => generateSerialNumber(index),
    },
    {
      name: "Name",
      selector: row => row.name,
    },
    {
      name: "Address",
      selector: row => row.address,
    },
    {
      name: "Contact No",
      selector: row => row.contact_no,
    },
    {
      name: "Opening Balance",
      selector: row => row.opening_balance,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_suppliers" onClick={() => getSuppliers(row.id)}> <img src={edit} /></button>
        <button onClick={() => deleteSuppliers(row.id)}><img src={trash} /></button>
      </>

    }
  ]

  if (suppliersError) {
    return <div>Error: {suppliersError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={suppliersList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsSuppliers}
          progressPending={isLoadedSuppliers}
          paginationTotalRows={totalRowsSuppliers}
          onChangePage={suppliersHandlePageChange}
        />
      </>
    )
  }
}

export default SuppliersListTable