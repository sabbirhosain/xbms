import DataTable from "react-data-table-component"
import { edit, logo, trash } from "../../../../Data/Images";
import "./AllUser.css"

const AllUser = () => {
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Image",
      selector: row => <img src={row.image} width={"50px"} alt="" />,
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

  const data = [
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 2,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "Admin",
      number: "+880 123 456 789",
    },
    {
      id: 3,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "STO",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "STO",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "Admin",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "STO",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "Admin",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
    {
      id: 1,
      name: "Sabbir Hosain",
      username: "sabbir475",
      email: "yourname@gmail.com",
      image: logo,
      roll: "User",
      number: "+880 123 456 789",
    },
  ];


  return (
    <>
      <DataTable columns={columns} data={data} pagination fixedHeader fixedHeaderScrollHeight="300px" selectableRows />
    </>
  )
}

export default AllUser