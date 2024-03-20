import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { Link } from 'react-router-dom'
import SelesPersonTable from '../../../Components/Users/SelesPerson/Table/SelesPersonTable'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'
import { useUserDataProvider } from '../../../ContextApi/UsersContextApi'

const SalesPerson = () => {
  const { designationsList } = useContextDataProvider();
  const { handleSelesPersonSearchInputChange, handleSelesPersonTypeChange, selectedSelesPersonType } = useUserDataProvider();
  return (
    <Layout title={"Sales Person"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Sales Person List</h2>
            <Link to={"/add-sales-person"} className="add_action_btn">
              <img src={balance7} alt="" />Add New Sales Person</Link>
          </div>
        </div>
      </section>
      <secton>
        <div className="container">
          <div className="row justify-content-end filter_row">
            <div className="col-md-6">
              <form className='d-flex align-items-center'>
                <div className="w-100 me-2">
                  <select className="form-select" value={selectedSelesPersonType} onChange={handleSelesPersonTypeChange}>
                    <option value={""}>Select Designation</option>
                    {
                      designationsList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                    }
                  </select>
                </div>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleSelesPersonSearchInputChange} placeholder="Search by name username and email" />
                </div>
              </form>
            </div>
          </div>
          <SelesPersonTable />
        </div>
      </secton>
    </Layout>
  )
}

export default SalesPerson