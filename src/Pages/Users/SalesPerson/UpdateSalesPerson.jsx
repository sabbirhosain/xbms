import { Link, useNavigate, useParams } from "react-router-dom";
import { useContextDataProvider } from "../../../ContextApi/ContextDataApi";
import Layout from "../../../Layout/Layout"
import "./SalesPerson.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { selesPerson_list, selesPerson_update } from "../../../ApiURL";
import { toast } from "react-toastify";

const UpdateSalesPerson = () => {
  const { designationsList, territoriList } = useContextDataProvider();
  const { id } = useParams()
  const navigate = useNavigate()
  const [updateSelsePerson, setUpdateSelsePerson] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    designation: "",
    territory: "",
    bonus_eligibility: false,
    sample_eligibility: false,
    carrying_rate: "",
    bonus_rate: "",
    applicable_rate: "",
    opening_balance: "",
    contact_address: "",
    contact_no: "",
    joining_date: "",
    password: "",
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUpdateSelsePerson(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const selsePersonInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateSelsePerson({ ...updateSelsePerson, [name]: value });
  };

  useEffect(() => {
    const getSelsePerson = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('access_token'));
        const response = await axios.get(`${selesPerson_list}${id}/`, {
          headers: { Authorization: `Bearer ${token.access}` }
        });
        setUpdateSelsePerson(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getSelsePerson()
  }, [])

  const updateSelsePersonHandler = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.put(`${selesPerson_update}${id}/`, updateSelsePerson, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Selse Person Updated Successfully!")
        navigate("/sales-person")
      }
    } catch (error) {
      console.error('Error updating salesperson:', error);
    }
  }


  return (
    <Layout title={"Update Sales Person"}>
      <section className='my-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="add_parson_box">
                <h3 className="add_parson_title">Update Sales Person</h3>
                <form onSubmit={updateSelsePersonHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name="first_name" value={updateSelsePerson.first_name} onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" name="username" value={updateSelsePerson.username} onChange={selsePersonInputChange} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <select className="form-select" name="designation" value={updateSelsePerson.designation || ''} onChange={selsePersonInputChange} >
                          <option value={""}>Select Designation</option>
                          {
                            designationsList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" name="bonus_eligibility" checked={updateSelsePerson.bonus_eligibility} id="Bonus_Eligibility" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="Bonus_Eligibility">Bonus Eligibility</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Carrying Rate</label>
                        <input type="number" className="form-control" name="carrying_rate" value={updateSelsePerson.carrying_rate} placeholder="00.00" onChange={selsePersonInputChange} />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Applicable Rate</label>
                        <select className="form-select" name="applicable_rate" value={updateSelsePerson.applicable_rate || ''} onChange={selsePersonInputChange}>
                          <option value={"company_price"}>Company Price</option>
                          <option value={"distributor_price"}>Distributor Price</option>
                          <option value={"retail_price"}>Retail Price</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Contact Address</label>
                        <input type="text" className="form-control" name="contact_address" value={updateSelsePerson.contact_address} onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input type="date" className="form-control" name="joining_date" value={updateSelsePerson.joining_date} placeholder="Input Rate" onChange={selsePersonInputChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last_name" value={updateSelsePerson.last_name} onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={updateSelsePerson.email} onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Territory</label>
                        <select className="form-select" name="territory" value={updateSelsePerson.territory || ''} onChange={selsePersonInputChange}>
                          <option value={""}>Select Territory</option>
                          {
                            territoriList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" name="sample_eligibility" checked={updateSelsePerson.sample_eligibility} id="Sample_Eligibility" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="Sample_Eligibility">Sample Eligibility</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus Rate</label>
                        <input type="number" className="form-control" name="bonus_rate" value={updateSelsePerson.bonus_rate} placeholder="00.00" onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Opening Balance</label>
                        <input type="number" className="form-control" name="opening_balance" value={updateSelsePerson.opening_balance} placeholder="00.00" onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact No</label>
                        <input type="number" className="form-control" name="contact_no" value={updateSelsePerson.contact_no} onChange={selsePersonInputChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={updateSelsePerson.password} placeholder="******" onChange={selsePersonInputChange} />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center mt-4">
                    <div className="col-md-6">
                      <div> <Link to={"/sales-person"} className='add_person_close_btn'>Close</Link></div>
                    </div>
                    <div className="col-md-6">
                      <div> <button type="submit" className='add_person_submit_btn'>Update Sales Person</button></div>
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

export default UpdateSalesPerson