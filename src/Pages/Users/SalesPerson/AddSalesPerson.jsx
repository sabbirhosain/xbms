import { Link, useNavigate } from "react-router-dom"
import Layout from "../../../Layout/Layout"
import "./SalesPerson.css"
import { useContextDataProvider } from "../../../ContextApi/ContextDataApi";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { selesPerson_create } from "../../../ApiURL";

const AddSalesPerson = () => {
  const { designationsList, territoriList, selesPersonFetch } = useContextDataProvider();
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [designation, setDesignation] = useState("")
  const [territory, setTerritory] = useState("")
  const [bonusEligibility, setBonusEligibility] = useState(false)
  const [sampleEligibility, setSampleEligibility] = useState(false)
  const [carryingRate, setCarryingRate] = useState("")
  const [applicableRate, setApplicableRate] = useState("company_price")
  const [bonusRate, setBonusRate] = useState("")
  const [openingBalance, setOpeningBalance] = useState("")
  const [contactAddress, setContactAddress] = useState("")
  const [joiningDate, setJoiningDate] = useState("")
  const [contactNo, setContactNo] = useState("")
  const [password, setPassword] = useState("")

  const bonusCheckboxChange = () => { setBonusEligibility(!bonusEligibility) };
  const sampleCheckboxChange = () => { setSampleEligibility(!sampleEligibility) };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.post(selesPerson_create, {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        designation: designation,
        territory: territory,
        bonus_eligibility: bonusEligibility,
        sample_eligibility: sampleEligibility,
        carrying_rate: carryingRate,
        bonus_rate: bonusRate,
        applicable_rate: applicableRate,
        opening_balance: openingBalance,
        contact_address: contactAddress,
        contact_no: contactNo,
        joining_date: joiningDate,
        password: password
      }, { headers: { Authorization: `Bearer ${token.access}` } });
      if (response && response.data) {
        toast.success("User Added Successfully!")
        navigate("/sales-person")
        // selesPersonFetch(1)
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };



  return (
    <Layout title={"Add Sales Person"}>
      <section className='my-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="add_parson_box">
                <h3 className="add_parson_title">Add Sales Person</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <select className="form-select" value={designation} onChange={(event) => setDesignation(event.target.value)}>
                          <option value={""}>Select Designation</option>
                          {
                            designationsList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value={bonusEligibility} onChange={bonusCheckboxChange} id="Bonus_Eligibility" />
                        <label className="form-check-label" htmlFor="Bonus_Eligibility">Bonus Eligibility</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Carrying Rate</label>
                        <input type="number" value={carryingRate} onChange={(event) => setCarryingRate(event.target.value)} className="form-control" placeholder="00.00" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Applicable Rate</label>
                        <select className="form-select" value={applicableRate} onChange={(event) => setApplicableRate(event.target.value)}>
                          <option value={"company_price"}>Company Price</option>
                          <option value={"distributor_price"}>Distributor Price</option>
                          <option value={"retail_price"}>Retail Price</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Contact Address</label>
                        <input type="text" value={contactAddress} onChange={(event) => setContactAddress(event.target.value)} className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input type="date" value={joiningDate} onChange={(event) => setJoiningDate(event.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Territory</label>
                        <select className="form-select" value={territory} onChange={(event) => setTerritory(event.target.value)}>
                          <option value={""}>Select Territory</option>
                          {
                            territoriList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" checked={sampleEligibility} onChange={sampleCheckboxChange} id="Sample_Eligibility" />
                        <label className="form-check-label" htmlFor="Sample_Eligibility">Sample Eligibility</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus Rate</label>
                        <input type="number" value={bonusRate} onChange={(event) => setBonusRate(event.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Opening Balance</label>
                        <input type="number" value={openingBalance} onChange={(event) => setOpeningBalance(event.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact No</label>
                        <input type="number" value={contactNo} onChange={(event) => setContactNo(event.target.value)} className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="******" />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center mt-4">
                    <div className="col-md-6">
                      <div> <Link to={"/sales-person"} className='add_person_close_btn'>Close</Link></div>
                    </div>
                    <div className="col-md-6">
                      <div> <button type="submit" className='add_person_submit_btn'>Add Sales Person</button></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AddSalesPerson