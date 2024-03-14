import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../Data/Images';

const InventoryPackSizeTable = () => {
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Product",
      selector: row => row.product,
    },
    {
      name: "Pack Size",
      selector: row => row.packSize,
    },
    {
      name: "Unit Name",
      selector: row => row.unitName,
    },
    {
      name: "Pack Type",
      selector: row => row.packType,
    },
    {
      name: "Product Quantity Per Unit",
      selector: row => row.productQuantityPerUnit,
    },
    {
      name: "Opening Balance",
      selector: row => row.openingBalance,
    },
    {
      name: "Current Balance",
      selector: row => row.currentBalance,
    },
    {
      name: "Recorder Level",
      selector: row => row.recorderLevel,
    },
    {
      name: "Recorder Level",
      selector: row => row.recorderLevel,
    },
    {
      name: "Bonus Base Quantity",
      selector: row => row.bonusBaseQuantity,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]


  return (
    <>
      <DataTable columns={columns} data={data} pagination></DataTable>
    </>
  )
}

export default InventoryPackSizeTable