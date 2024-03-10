import { dashIcon12, edit, trash } from '../../../Data/Images'
import { CiSearch } from '../../../Data/Icon'
import Layout from '../../../Layout/Layout'
import "./AccountChart.css"
import AddUser from '../../../Components/Modal/User/AddUser/AddUser'

const AccountChart = () => {
  return (
    <Layout title={"Account Chart"}>
      <section className='account_cart'>
        <div className="container-fluid">
          <nav className='account_filter_row'>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link account_cart_filter_btn active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Asset</button>

              <button className="nav-link account_cart_filter_btn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Liability</button>

              <button className="nav-link account_cart_filter_btn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Income</button>

              <button className="nav-link account_cart_filter_btn" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Expense</button>
            </div>
            <div className='account_search_box'>
              <CiSearch className='account_search_icon' />
              <input type="search" className='account_search_input' placeholder='Search' />
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn' data-bs-toggle="modal" data-bs-target="#addUserModal">
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New User</button>
                  <AddUser />
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button><img src={trash} className='account_action_icon me-1' /></button>
                          <button><img src={edit} className='account_action_icon ms-1' /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <div className='add_new_account_row'>
                  <h5 className='add_new_account_title'>My Cash</h5>
                  <button className='account_add_new_btn'>
                    <img src={dashIcon12} className='account_add_new_icon' alt="" />Add New Cash</button>
                </div>
                <div>
                  <table className='table table-responsive table-hover'>
                    <thead className=''>
                      <tr>
                        <th>Cash Type</th>
                        <th>Balance</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Office</td>
                        <td>5,000.00</td>
                        <td className='d-flex align-items-center justify-content-center'>
                          <button>a</button>
                          <button>b</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AccountChart