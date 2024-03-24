import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import RawItemTable from '../../../Components/Inventory/RawItem/Table/RawItemTable'
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi'

const InventoryRawItem = () => {
  const { handleRawitemSearchInputChange } = useInventoryDataProvider()
  return (
    <Layout title={"Inventory RawItem"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Raw Items List</h2>
            <button className="add_action_btn" > <img src={balance7} />Add New Raw Items</button>
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
            <div className="col-md-3">
              <form className='d-flex align-items-center'>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleRawitemSearchInputChange} placeholder="Search by name, unit name" />
                </div>
              </form>
            </div>
          </div>
          <RawItemTable />
        </div>
      </section>
    </Layout>
  )
}

export default InventoryRawItem