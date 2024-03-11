import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'

const UnitType = () => {
  return (
    <Layout title={"Unit Type"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Unit Type</h2>
            <button className="setup_page_btn"><img src={balance7} alt="" />Create</button>
          </div>
          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/territory"}>Territory</NavLink>
              <NavLink className="setup_page_link" to={"/designation"}>Designation</NavLink>
              <NavLink className="setup_page_link" to={"/unit-type"}>Unit Type</NavLink>
              <NavLink className="setup_page_link" to={"/product-category"}>Product Category</NavLink>
            </div>
            <div>
              <input type="search" placeholder="" name="" id="" />
            </div>
          </nav>
        </div>
      </section>
      Unit Type
    </Layout>
  )
}

export default UnitType