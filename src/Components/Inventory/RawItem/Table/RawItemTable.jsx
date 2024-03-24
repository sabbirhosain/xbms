import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../Data/Images';
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi';

const RawItemTable = () => {
  const { rawitemList, rawitemError, isLoadedRawitem, totalRowsSuppRawitem, paginationComponentOptionsRawitem, rawitemHandlePageChange, } = useInventoryDataProvider()
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Name",
      selector: row => row.name,
    },
    {
      name: "Unit Name",
      selector: row => row.unit_name,
    },
    {
      name: "Opening Balance",
      selector: row => row.opening_balance,
    },
    {
      name: "Current Balance",
      selector: row => row.current_balance,
    },
    {
      name: "Recorder Level",
      selector: row => row.recorder_level,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];
  if (rawitemError) {
    return <div>Error: {rawitemError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={rawitemList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsRawitem}
          progressPending={isLoadedRawitem}
          paginationTotalRows={totalRowsSuppRawitem}
          onChangePage={rawitemHandlePageChange}
        />
      </>
    )
  }
}

export default RawItemTable