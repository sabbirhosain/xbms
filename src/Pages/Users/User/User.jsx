import React from 'react'
import Layout from '../../../Layout/Layout'
import { dashIcon12 } from '../../../Data/Images'
import AddUser from '../../../Components/Modal/User/AddUser/AddUser'
import AllUser from '../../../Components/Modal/User/AllUser/AllUser'

const User = () => {
  return (
    <Layout title={"User List"}>
      <section className='user_list'>
        <div className="container">
          <div className='add_new_account_row'>
            <h5 className='add_new_account_title'>User List</h5>
            <button className='account_add_new_btn' data-bs-toggle="modal" data-bs-target="#addUserModal">
              <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New User</button>
          </div>
          <AddUser />
          <div>
            <AllUser />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default User