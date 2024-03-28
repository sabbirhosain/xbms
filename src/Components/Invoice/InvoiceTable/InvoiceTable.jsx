import React from 'react'
import DataTable from 'react-data-table-component';
import { trash } from '../../../Data/Images';

const InvoiceTable = () => {
  const columns = [
    {
      name: "Product",
      selector: row => row.product,
    },
    {
      name: "Unit Name",
      selector: row => row.product,
    },
    {
      name: "Unit Price",
      selector: row => row.product,
    },
    {
      name: "Purchase Quantity",
      selector: row => row.product,
    },
    {
      name: "Bonus Quantity",
      selector: row => row.product,
    },
    {
      name: "Sample amount",
      selector: row => row.product,
    },
    {
      name: "Total Quantity",
      selector: row => row.product,
    },
    {
      name: "Sub Total",
      selector: row => row.product,
    },
    {
      name: "Action",
      cell: row => <>
        <button onClick={() => delete_rawitem(row.id)}><img src={trash} /></button>
      </>

    }
  ];
  const data = [
    {
      product: "product1"
    },
    {
      product: "product2"
    },
    {
      product: "product3"
    },
  ]
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
      />
    </>
  )
}

export default InvoiceTable