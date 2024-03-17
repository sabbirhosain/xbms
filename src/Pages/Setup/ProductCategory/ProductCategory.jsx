import React from 'react'
import Layout from '../../../Layout/Layout'
import { balance7 } from '../../../Data/Images'
import { NavLink } from 'react-router-dom'
import ProductCategoryTable from '../../../Components/Setup/ProductCategory/Table/ProductCategoryTable'
import AddProductCategoryModal from '../../../Components/Setup/ProductCategory/Modal/AddProductCategoryModal'
import UpdateProductCategoryModal from '../../../Components/Setup/ProductCategory/Modal/UpdateProductCategoryModal'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'

const ProductCategory = () => {
  const { handleOpenModal } = useContextDataProvider()
  return (
    <Layout title={"Product Category"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Product Category</h2>
            <button className="add_action_btn" onClick={handleOpenModal}><img src={balance7} />Create</button>
          </div>
          <AddProductCategoryModal />
          <UpdateProductCategoryModal />
          <nav className="setup_navbar">
            <div>
              <NavLink className="setup_page_link" to={"/territory"}>Territory</NavLink>
              <NavLink className="setup_page_link" to={"/designation"}>Designation</NavLink>
              <NavLink className="setup_page_link" to={"/unit-type"}>Unit Type</NavLink>
              <NavLink className="setup_page_link" to={"/product-category"}>Product Category</NavLink>
            </div>
          </nav>
        </div>
      </section>

      <section className='mt-4'>
        <div className="container">
          <ProductCategoryTable />
        </div>
      </section>
    </Layout>
  )
}

export default ProductCategory