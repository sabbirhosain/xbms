import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import TerritoryTable from '../../../Components/Setup/Territory/Table/TerritoryTable'
import "./Territory.css"
import AddTerritoryModal from '../../../Components/Setup/Territory/Modal/AddTerritoryModal'

const Territory = () => {
  return (
    <Layout title={"Territory"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Territory List</h2>
            <button className="setup_page_btn" data-bs-toggle="modal" data-bs-target="#add_territory">
              <img src={balance7} alt="" />Create</button>
          </div>
          <AddTerritoryModal />
          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/territory"}>Territory</NavLink>
              <NavLink className="setup_page_link" to={"/designation"}>Designation</NavLink>
              <NavLink className="setup_page_link" to={"/unit-type"}>Unit Type</NavLink>
              <NavLink className="setup_page_link" to={"/product-category"}>Product Category</NavLink>
            </div>
            <div>
              <input type="search" placeholder="search" name="" id="" />
            </div>
          </nav>
        </div>
      </section>

      <section>
        <div className="container">
          <TerritoryTable />
        </div>
      </section>
    </Layout>
  )
}

export default Territory