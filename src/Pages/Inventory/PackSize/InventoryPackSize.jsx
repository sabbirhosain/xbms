import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import { balance7 } from '../../../Data/Images'
import InventoryPackSizeTable from '../../../Components/Inventory/PackSize/InventoryPackSizeTable'
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi'

const InventoryPackSize = () => {
  const { handlePacksizeSearchInputChange } = useInventoryDataProvider()
  return (
    <Layout title={"Inventory PackSize"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Pack size List</h2>
            <Link to={"/add-inventory-pack-size"} className="add_action_btn">
              <img src={balance7} alt="" />Add New Pack size</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-end filter_row">
            <div className="col-md-3">
              <form className='d-flex align-items-center'>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handlePacksizeSearchInputChange} placeholder="Search by product, pack size, unit name, pack type" />
                </div>
              </form>
            </div>
          </div>
          <InventoryPackSizeTable />
        </div>
      </section>
    </Layout>
  )
}

export default InventoryPackSize