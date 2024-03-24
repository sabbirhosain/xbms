import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../../Data/Images';
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi';

const ProductStockOutTable = () => {
  const { productStockoutError, isLoadedProductStockout, productStockoutList, totalRowsSuppProductStockout, paginationComponentOptionsProductStockout, productStockoutHandlePageChange, } = useInventoryDataProvider()
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Pack Size",
      selector: row => row.pack_size,
    },
    {
      name: "Quantity",
      selector: row => row.quantity,
    },
    {
      name: "Date Time",
      selector: row => row.date_time,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  if (productStockoutError) {
    return <div>Error: {productStockoutError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={productStockoutList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsProductStockout}
          progressPending={isLoadedProductStockout}
          paginationTotalRows={totalRowsSuppProductStockout}
          onChangePage={productStockoutHandlePageChange}
        />
      </>
    )
  }
}

export default ProductStockOutTable