import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../Data/Images';

const UnitTypeTable = () => {
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "UnitType Name",
      selector: row => row.name,
      width:"800px"
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
      <DataTable columns={columns} data={data} pagination></DataTable>
    </>
  )
}

export default UnitTypeTable