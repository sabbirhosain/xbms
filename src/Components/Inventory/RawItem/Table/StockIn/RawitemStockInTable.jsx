import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../../Data/Images';
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi';

const RawitemStockInTable = () => {
  const { rawStockinError, isLoadedRawStockin, rawStockinList, totalRowsSuppRawStockin, paginationComponentOptionsRawStockin, rawitemStockinHandlePageChange} = useInventoryDataProvider()
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
    // {
    //   name: "Action",
    //   cell: row => <>
    //     <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
    //     <button onClick={() => alert(row.id)}><img src={trash} /></button>
    //   </>

    // }
  ];


  if (rawStockinError) {
    return <div>Error: {rawStockinError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={rawStockinList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsRawStockin}
          progressPending={isLoadedRawStockin}
          paginationTotalRows={totalRowsSuppRawStockin}
          onChangePage={rawitemStockinHandlePageChange}
        />
      </>
    )
  }
}

export default RawitemStockInTable