import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import ProductCategoryTable from '../../../Components/Setup/ProductCategory/Table/ProductCategoryTable'

const ProductCategory = () => {
  return (
    <Layout title={"Product Category"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Product Category</h2>
            <button className="add_action_btn"><img src={balance7} alt="" />Create</button>
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

      <section>
        <div className="container">
          <ProductCategoryTable />
        </div>
      </section>
    </Layout>
  )
}

export default ProductCategory