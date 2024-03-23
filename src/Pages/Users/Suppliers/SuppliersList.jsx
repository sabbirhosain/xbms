import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import SuppliersListTable from '../../../Components/Users/Suppliers/Table/SuppliersListTable'
import { useUserDataProvider } from '../../../ContextApi/UsersContextApi'
import AddSuppliersModal from '../../../Components/Users/Suppliers/Modal/AddSuppliersModal'
import UpdateSuppliersModal from '../../../Components/Users/Suppliers/Modal/UpdateSuppliersModal'

const SuppliersList = () => {
  const { handleSuppliersSearchInputChange, handleUserOpenModal } = useUserDataProvider()
  return (
    <Layout title={"Suppliers List"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Suppliers List</h2>
            <button className="add_action_btn" onClick={handleUserOpenModal}>
              <img src={balance7} alt="" />Add New Suppliers</button>
          </div>
        </div>
      </section>
      <AddSuppliersModal />
      <UpdateSuppliersModal />
      <section>
        <div className="container">
          <div className="row justify-content-end filter_row">
            <div className="col-md-3">
              <form className='d-flex align-items-center'>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleSuppliersSearchInputChange} placeholder="Search by name username and email" />
                </div>
              </form>
            </div>
          </div>
          <SuppliersListTable />
        </div>
      </section>
    </Layout>
  )
}

export default SuppliersList