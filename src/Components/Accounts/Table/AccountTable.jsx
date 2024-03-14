import React from 'react'
import { edit, trash } from '../../../Data/Images';
import DataTable from 'react-data-table-component';
import UpdateAccountModal from '../Modal/UpdateAccountModal';

const AccountTable = () => {

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
      name: "Opening Balance",
      selector: row => row.opening,
    },
    {
      name: "Current Balance",
      selector: row => row.current,
    },
    {
      name: "",
      selector: row => row.x,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_account" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => alert(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  const data = [
    {
      id: 1,
      name: 'Sabbir Hosain',
      opening: '0000',
      current: "00"
    },
    {
      id: 2,
      name: 'Sabbir Hosain',
      opening: '0000',
      current: "00"
    },
    {
      id: 3,
      name: 'Sabbir Hosain',
      opening: '0000',
      current: "00"
    },
  ]


  return (
    <>
      <DataTable columns={columns} data={data} pagination></DataTable>
      <UpdateAccountModal />
    </>
  )
}

export default AccountTable