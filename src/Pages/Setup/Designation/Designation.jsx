import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import DesignationTable from '../../../Components/Setup/Designation/Table/DesignationTable'
import AddDesignationModal from '../../../Components/Setup/Designation/Modal/AddDesignationModal'
import UpdateDesignationModal from '../../../Components/Setup/Designation/Modal/UpdateDesignationModal'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'

const Designation = () => {
  const { handleOpenModal } = useContextDataProvider()
  return (
    <Layout title={"Designation"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Designation</h2>
            <button className="add_action_btn" onClick={handleOpenModal}><img src={balance7} />Create</button>
          </div>
          <AddDesignationModal />
          <UpdateDesignationModal />
          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/territory"}>Territory</NavLink>
              <NavLink className="setup_page_link" to={"/designation"}>Designation</NavLink>
              <NavLink className="setup_page_link" to={"/unit-type"}>Unit Type</NavLink>
              <NavLink className="setup_page_link" to={"/product-category"}>Product Category</NavLink>
            </div>
          </nav>
        </div>
      </section>

      <section className='mt-4'>
        <div className="container">
          <DesignationTable />
        </div>
      </section>
    </Layout>
  )
}

export default Designation