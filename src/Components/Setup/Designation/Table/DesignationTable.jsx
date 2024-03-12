import React from 'react'
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';

const DesignationTable = () => {
  
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Designation Name",
      selector: row => row.name,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  const data = [
    {
      id: 1,
      name: 'Sabbir Hosain',
    },
    {
      id: 2,
      name: 'Sabbir Hosain',
    },
    {
      id: 3,
      name: 'Sabbir Hosain',
    },
  ]


  return (
    <>
      <DataTable columns={columns} data={data}></DataTable>
    </>
  )
}

export default DesignationTable