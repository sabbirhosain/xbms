import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { edit, trash } from '../../../../Data/Images';
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi';
const SelesPersonTable = () => {
  const { selesPersonList, selesPersonError, isLoadedSelesPerson, totalRowsSelesPerson, paginationComponentOptionsSelesPerson, selesPersonHandlePageChange, } = useUserDataProvider();
  const generateSerialNumber = (index) => index + 1;
  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => generateSerialNumber(index),
    },
    {
      name: "Full Name",
      selector: row => row.first_name + ' ' + row.last_name,
    },
    {
      name: "User Name",
      selector: row => row.username,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Designation",
      selector: row => row.designation,
    },
    {
      name: "Territory",
      selector: row => row.territory,
    },
    {
      name: "Bonus Eligibility",
      selector: row => row.bonus_eligibility === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "5px" }}>No</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "5px" }}>Yes</button>,
    },
    {
      name: "Sample Eligibility",
      selector: row => row.sample_eligibility === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "5px" }}>No</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "5px" }}>Yes</button>,
    },
    {
      name: "Carrying Rate",
      selector: row => row.carrying_rate,
    },
    {
      name: "Bonus Rate",
      selector: row => row.bonus_rate,
    },
    {
      name: "Applicable Rate",
      selector: row => row.applicable_rate,
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
      name: "Contact Address",
      selector: row => row.contact_address,
    },
    {
      name: "Contact No",
      selector: row => row.contact_no,
    },
    {
      name: "Joining Date",
      selector: row => row.joining_date,
    },
    {
      name: "Action",
      cell: row => <>
        <Link className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></Link>
        <Link onClick={() => alert(row.id)}><img src={trash} /></Link>
      </>

    }
  ]

  if (selesPersonError) {
    return <div>Error: {selesPersonError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={selesPersonList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsSelesPerson}
          progressPending={isLoadedSelesPerson}
          paginationTotalRows={totalRowsSelesPerson}
          onChangePage={selesPersonHandlePageChange}
        />
      </>
    )
  }
}

export default SelesPersonTable