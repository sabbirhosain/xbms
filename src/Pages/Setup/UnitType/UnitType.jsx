import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import UnitTypeTable from '../../../Components/Setup/UnitType/Table/UnitTypeTable'
import AddUnitTypeModal from '../../../Components/Setup/UnitType/Modal/AddUnitTypeModal'
import UpdateUnitTypeModal from '../../../Components/Setup/UnitType/Modal/UpdateUnitTypeModal'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'

const UnitType = () => {
  const { handleOpenModal } = useContextDataProvider()
  return (
    <Layout title={"Unit Type"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Unit Type</h2>
            <button className="add_action_btn" onClick={handleOpenModal}><img src={balance7} />Create</button>
          </div>
          <AddUnitTypeModal />
          <UpdateUnitTypeModal />
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
          <UnitTypeTable />
        </div>
      </section>
    </Layout>
  )
}

export default UnitType