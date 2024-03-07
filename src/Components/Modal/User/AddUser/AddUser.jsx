import { useState } from "react"
import "./AddUser.css"

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");
  const [address, SetAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [commissionPercent, setCommissionPercent] = useState("");
  const [bonusPercent, setBonusPercent] = useState("");
  const [applicableRate, setApplicableRate] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <form onSubmit={formSubmit} className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Sabbir" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="sabbirhosain543" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="user_email" placeholder="name@example.com" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="user_number" className="form-label">Phone Number</label>
                    <input type="email" className="form-control" id="user_number" placeholder="+880 123 456 7890" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Village, Upazila, District" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Select Image File</label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Hosain" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" className="form-control" id="department" placeholder="Pharmacy" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Roll Management </label>
                    <select className="form-select add_user_select" aria-label="Default select example">
                      <option defaultValue={"user"}>User</option>
                      <option value={"mpo"}>MPO</option>
                      <option value={"2"}>Two</option>
                      <option value={"3"}>Three</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="balance" className="form-label">Balance</label>
                    <input type="text" className="form-control" id="balance" placeholder="00.00$" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="commission_percent" className="form-label">Commission Percent</label>
                    <input type="text" className="form-control" id="commission_percent" placeholder="0.0%" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bonus_percent" className="form-label">Bonus Percent</label>
                    <input type="text" className="form-control" id="bonus_percent" placeholder="0.0%" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="applicable_rate" className="form-label">Applicable Rate</label>
                    <input type="text" className="form-control" id="applicable_rate" placeholder="0.0%" />
                  </div>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
        Launch demo modal
      </button> */}
    </>
  )
}

export default AddUser