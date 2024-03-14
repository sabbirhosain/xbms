import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'
import { balance7 } from '../../../Data/Images'
import InventoryPackSizeTable from '../../../Components/Inventory/PackSize/InventoryPackSizeTable'

const InventoryPackSize = () => {
  return (
    <Layout title={"Inventory PackSize"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Pack size List</h2>
            <Link to={"/add-inventory-pack-size"} className="add_action_btn">
              <img src={balance7} alt="" />Add New Sales Person</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <InventoryPackSizeTable />
        </div>
      </section>
    </Layout>
  )
}

export default InventoryPackSize