import React from 'react'
import Layout from '../../../Layout/Layout'
import SalesPersonsList from '../../../Components/Users/AllUsers/Table/SalesPersonsList'
import { balance7 } from '../../../Data/Images'

const SalesPersonList = () => {
  return (
    <Layout title={"SalesPerson List"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Sales Person List</h2>
            <button className="add_action_btn" data-bs-toggle="modal" data-bs-target="#add_territory">
              <img src={balance7} alt="" />Add New Sales Person</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SalesPersonsList />
        </div>
      </section>
    </Layout>
  )
}

export default SalesPersonList