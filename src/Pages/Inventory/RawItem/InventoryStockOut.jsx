import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import RawitemStockOutTable from '../../../Components/Inventory/RawItem/Table/StockOut/RawitemStockOutTable'
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi'

const InventoryStockOut = () => {
  const { handleStockoutFromDateChange, handleStockoutToDateChange, handleRawitemStockoutSearchInputChange } = useInventoryDataProvider()
  return (
    <Layout title={"Inventory Stock Out"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Stock Out List</h2>
            <button className="add_action_btn" > <img src={balance7} />Add New Stock Out</button>
          </div>

          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/inventory-raw-item"}>Raw Items</NavLink>
              <NavLink className="setup_page_link" to={"/inventory-stock-in"}>Stock in</NavLink>
              <NavLink className="setup_page_link" to={"/inventory-stock-out"}>Stock out</NavLink>
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
                  <input type="date" className="form-control" onChange={handleStockoutFromDateChange} />
                </div>
                <div className='px-3' style={{ fontSize: "16px", fontWeight: "300" }}>to</div>
                <div className="w-50">
                  <input type="date" className="form-control" onChange={handleStockoutToDateChange} />
                </div>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleRawitemStockoutSearchInputChange} placeholder="Search by Raw items" />
                </div>
              </form>
            </div>
          </div>
          <RawitemStockOutTable />
        </div>
      </section>
    </Layout>
  )
}

export default InventoryStockOut