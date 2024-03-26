import React from 'react'
import Layout from '../../../../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { balance7 } from '../../../../Data/Images'
import ProductStockOutTable from '../../../../Components/Inventory/Product/Table/ProductStockOut/ProductStockOutTable'
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi'
import ProductStockout from '../../../../Components/Inventory/Product/Modal/Stockout/ProductStockout'
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'

const ProductStockOut = () => {
  const { handleProductStockoutFromDateChange, handleProductStockoutToDateChange, handleProductStockoutSearchInputChange } = useInventoryDataProvider()
  const { handleUserOpenModal } = useUserDataProvider()
  return (
    <Layout title={"Stock Out"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Product Stock Out</h2>
            <button className="add_action_btn" onClick={handleUserOpenModal}>
              <img src={balance7} alt="" />Add New Account</button>
          </div>
          <ProductStockout />
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
            <div className="col-md-7">
              <form className='d-flex align-items-center'>
                <div className="w-50">
                  <input type="date" className="form-control" onChange={handleProductStockoutFromDateChange} />
                </div>
                <div className='px-3' style={{ fontSize: "16px", fontWeight: "300" }}>to</div>
                <div className="w-50">
                  <input type="date" className="form-control" onChange={handleProductStockoutToDateChange} />
                </div>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleProductStockoutSearchInputChange} placeholder="Search by Raw items" />
                </div>
              </form>
            </div>
          </div>
          <ProductStockOutTable />
        </div>
      </section>
    </Layout>
  )
}

export default ProductStockOut