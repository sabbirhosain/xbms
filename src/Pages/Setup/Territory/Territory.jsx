import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import TerritoryTable from '../../../Components/Setup/Territory/Table/TerritoryTable'
import "./Territory.css"
import AddTerritoryModal from '../../../Components/Setup/Territory/Modal/AddTerritoryModal'
import UpdateTerritoryModal from '../../../Components/Setup/Territory/Modal/UpdateTerritoryModal copy'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'

const Territory = () => {
  const { handleOpenModal } = useContextDataProvider()
  return (
    <Layout title={"Territory"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Territory List</h2>
            <button className="add_action_btn" onClick={handleOpenModal}> <img src={balance7}/>Create</button>
          </div>
          <AddTerritoryModal />
          <UpdateTerritoryModal />
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
          <TerritoryTable />
        </div>
      </section>
    </Layout>
  )
}

export default Territory