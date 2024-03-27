import React from 'react'
import Layout from '../../../../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { balance7 } from '../../../../Data/Images'
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi'
import ProductStockInTable from '../../../../Components/Inventory/Product/Table/ProductStockIn/ProductStockInTable'
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'
import ProductStockin from '../../../../Components/Inventory/Product/Modal/Stockin/ProductStockin'

const ProductStockIn = () => {
  const { handleProductStockinFromDateChange, handleProductStockinToDateChange, handleProductStockinSearchInputChange } = useInventoryDataProvider()
  const { handleUserOpenModal } = useUserDataProvider()
  return (
    <Layout title={"Product Stock In"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Product Stock In</h2>
            <button className="add_action_btn" onClick={handleUserOpenModal}><img src={balance7} alt="" />Add Product Stockin</button>
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
      <ProductStockin />
      <section className='mt-4'>
        <div className="container">
          <div className="row justify-content-end filter_row">
            <div className="col-md-7">
              <form className='d-flex align-items-center'>
                <div className="w-50">
                  <input type="date" className="form-control" onChange={handleProductStockinFromDateChange} />
                </div>
                <div className='px-3' style={{ fontSize: "16px", fontWeight: "300" }}>to</div>
                <div className="w-50">
                  <input type="date" className="form-control" onChange={handleProductStockinToDateChange} />
                </div>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleProductStockinSearchInputChange} placeholder="Search by Raw items" />
                </div>
              </form>
            </div>
          </div>
          <ProductStockInTable />
        </div>
      </section>
    </Layout>
  )
}

export default ProductStockIn