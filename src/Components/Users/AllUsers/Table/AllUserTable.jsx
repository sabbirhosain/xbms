import DataTable from "react-data-table-component"
import { edit, trash } from "../../../../Data/Images";
import { useUserDataProvider } from "../../../../ContextApi/UsersContextApi";

const AllUserTable = () => {
  const { userList, userError, isLoadedUser, totalRowsUser, paginationComponentOptionsUser, userHandlePageChange, delete_user } = useUserDataProvider();
  const generateSerialNumber = (index) => index + 1;

  // table column name
  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => generateSerialNumber(index),
    },
    {
      name: "Image",
      selector: row => <img src={row.picture} style={{ maxWidth: "40px", maxHeight: "40px", objectFit: "cover" }} alt="image" />
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
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "User Type",
      selector: row => row.user_type,
      sortable: true,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => delete_user(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  if (userError) {
    return <div>Error: {userError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={userList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsUser}
          progressPending={isLoadedUser}
          paginationTotalRows={totalRowsUser}
          onChangePage={userHandlePageChange}
        />
      </>
    )
  }
}

export default AllUserTable