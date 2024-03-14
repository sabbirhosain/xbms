import React from 'react'
import Layout from '../../../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { balance7 } from '../../../Data/Images'

const InventoryProduct = () => {
  return (
    <Layout title={"Inventory Product"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Product List</h2>
            <button className="add_action_btn" data-bs-toggle="modal" data-bs-target="#add_territory">
              <img src={balance7} alt="" />Add New Raw Item</button>
          </div>
          {/* <AddTerritoryModal /> */}
          <nav className="setup_navbar">
            <div>
            <NavLink className="setup_page_link" to={"/inventory-product"}>Product</NavLink>
              <NavLink className="setup_page_link" to={"/product-stock-in"}>Stock In</NavLink>
              <NavLink className="setup_page_link" to={"/product-stock-out"}>Stock Out</NavLink>
            </div>
          </nav>
        </div>
      </section>
    </Layout>
  )
}

export default InventoryProduct