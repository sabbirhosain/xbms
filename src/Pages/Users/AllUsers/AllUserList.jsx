import React from 'react'
import Layout from '../../../Layout/Layout'
import SalesPersonsList from '../../../Components/Users/AllUsers/Table/AllUserTable'
import { balance7 } from '../../../Data/Images'
import { useUserDataProvider } from '../../../ContextApi/UsersContextApi'
import AddUserModal from '../../../Components/Users/AllUsers/Modal/AddUserModal'
import UpdateUserModal from '../../../Components/Users/AllUsers/Modal/UpdateUserModal'

const AllUserList = () => {
  const { handleUserOpenModal } = useUserDataProvider()
  return (
    <Layout title={"SalesPerson List"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">All User List</h2>
            <button className="add_action_btn" onClick={handleUserOpenModal}>
              <img src={balance7} alt="" />Add New User</button>
          </div>
        </div>
      </section>
      <AddUserModal />
      <UpdateUserModal />
      <section>
        <div className="container">
          <SalesPersonsList />
        </div>
      </section>
    </Layout>
  )
}

export default AllUserList