import React from 'react'
import { edit, trash } from '../../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi';

const RawitemStockOutTable = () => {
  const { rawStockoutError, isLoadedRawStockout, rawStockoutList, totalRowsSuppRawStockout, paginationComponentOptionsRawStockout, rawitemStockoutHandlePageChange } = useInventoryDataProvider()
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Raw Item",
      selector: row => row.raw_item,
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


  if (rawStockoutError) {
    return <div>Error: {rawStockoutError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={rawStockoutList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsRawStockout}
          progressPending={isLoadedRawStockout}
          paginationTotalRows={totalRowsSuppRawStockout}
          onChangePage={rawitemStockoutHandlePageChange}
        />
      </>
    )
  }
}

export default RawitemStockOutTable