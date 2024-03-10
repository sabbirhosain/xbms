import DataTable from "react-data-table-component"
import { edit, trash } from "../../../../Data/Images";
import "./AllUser.css"
import { UserData } from "../../../../Data/Data";
import { useCallback, useMemo, useState } from "react";

const AllUser = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(UserData);
  const [expandedRows, setExpandedRows] = useState([]);

  // table column name
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Image",
      selector: row => <img src={row.image} width={"35px"} alt="" />,
    },
    {
      name: "Full Name",
      selector: row => row.name,
    },
    {
      name: "Roll Management",
      selector: row => row.roll,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: row => row.number,
    },
    {
      name: "Email Address",
      selector: row => row.email,
    },
    {
      name: "User Name",
      selector: row => row.username,
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" onClick={() => alert(row.id)}>
          <img src={edit} />
        </button>
        <button className="" onClick={() => alert(row.id)}>
          <img src={trash} />
        </button>
      </>

    }
  ];

  // multiple select with delete start

  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {

      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'title'));
      }
    };

    return (
      <button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red', padding: "5px 10px", color: "white" }}> Delete </button>
    );
  }, [data, selectedRows, toggleCleared]);

  // multiple select with delete end




  // single user in expand

  const expandableRowsComponent = ({ data }) => (
    <div className="container">
      <div className="row align-items-center justify-content-between px-5 py-3">
        <div className="col-md-2">
          <img src={data.image} style={{ maxWidth: "150px", objectFit: "cover" }} alt="" />
        </div>
        <div className="col-md-4 g-0">
          <ul class="list-group rounded-0">
            <li class="list-group-item border-0 py-1">Id : {data.id}</li>
            <li class="list-group-item border-0 py-1">Name : {data.name}</li>
            <li class="list-group-item border-0 py-1">Role : {data.roll}</li>
            <li class="list-group-item border-0 py-1">Number : {data.number}</li>
            <li class="list-group-item border-0 py-1">Name : {data.username}</li>
            <li class="list-group-item border-0 py-1">Email : {data.email}</li>
          </ul>
        </div>
        <div className="col-md-5 g-0">
          <ul class="list-group rounded-0">
            <li class="list-group-item border-0 py-1">Id : {data.id}</li>
            <li class="list-group-item border-0 py-1">Name : {data.name}</li>
            <li class="list-group-item border-0 py-1">Role : {data.roll}</li>
            <li class="list-group-item border-0 py-1">Number : {data.number}</li>
            <li class="list-group-item border-0 py-1">Name : {data.username}</li>
            <li class="list-group-item border-0 py-1">Email : {data.email}</li>
          </ul>
        </div>

      </div>
    </div>
  );

  const handleRowExpand = (expandedRows) => {
    setExpandedRows(expandedRows);
  };




  return (
    <>
      <DataTable
        title="All Users"
        columns={columns}
        data={data}

        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}

        pagination

        expandableRows
        expandableRowsComponent={expandableRowsComponent}
        onRowExpandToggled={handleRowExpand}
        expandedRows={expandedRows}

        subHeader
        subHeaderComponent={<input type="search" className="form-control my-3 py-2 w-25" placeholder="Search" />}
        fixedHeader
        fixedHeaderScrollHeight="400px"
      />
    </>
  )
}

export default AllUser