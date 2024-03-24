import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../../Data/Images';
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi';

const ProductStockInTable = () => {
  const { productStockinError, isLoadedProductStockin, productStockinList, totalRowsSuppProductStockin, paginationComponentOptionsProductStockin, productStockinHandlePageChange, } = useInventoryDataProvider()
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


  if (productStockinError) {
    return <div>Error: {productStockinError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={productStockinList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsProductStockin}
          progressPending={isLoadedProductStockin}
          paginationTotalRows={totalRowsSuppProductStockin}
          onChangePage={productStockinHandlePageChange}
        />
      </>
    )
  }
}

export default ProductStockInTable