import React from 'react'
import Layout from '../../../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { balance7 } from '../../../Data/Images'
import ProductTable from '../../../Components/Inventory/Product/Table/ProductTable'

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
          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/inventory-product"}>Product</NavLink>
              <NavLink className="setup_page_link" to={"/product-stock-in"}>Stock In</NavLink>
              <NavLink className="setup_page_link" to={"/product-stock-out"}>Stock Out</NavLink>
            </div>
          </nav>
        </div>
      </section>
      <section className='mt-4'>
        <div className="container">
          <div className="row justify-content-end filter_row">
            <div className="col-md-3">
              <form className='d-flex align-items-center'>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" placeholder="Search by Raw items" />
                </div>
              </form>
            </div>
          </div>
          <ProductTable />
        </div>
      </section>
    </Layout>
  )
}

export default InventoryProduct