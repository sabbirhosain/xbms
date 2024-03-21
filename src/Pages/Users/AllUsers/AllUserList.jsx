import "./AllUserList.css"
import Layout from '../../../Layout/Layout'
import SalesPersonsList from '../../../Components/Users/AllUsers/Table/AllUserTable'
import { balance7 } from '../../../Data/Images'
import { useUserDataProvider } from '../../../ContextApi/UsersContextApi'
import AddUserModal from '../../../Components/Users/AllUsers/Modal/AddUserModal'
import UpdateUserModal from '../../../Components/Users/AllUsers/Modal/UpdateUserModal'

const AllUserList = () => {
  const { handleUserOpenModal, userTypes, selectedUserType, handleUserTypeChange, handleSearchInputChange } = useUserDataProvider();
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
          <div className="row justify-content-end filter_row">
            <div className="col-md-6">
              <form className='d-flex align-items-center'>
                <div className="w-100 me-2">
                  <select className="form-select" value={selectedUserType} onChange={handleUserTypeChange}>
                    <option value={""}>Select User Type</option>
                    {
                      userTypes.map((item, index) => (<option key={index} value={item}>{item}</option>))
                    }
                  </select>
                </div>
                <div className='w-100 ms-2'>
                  <input className="form-control" type="search" onChange={handleSearchInputChange} placeholder="Search by name username and email" />
                </div>
              </form>
            </div>
          </div>
          <SalesPersonsList />
        </div>
      </section>
    </Layout>
  )
}

export default AllUserList