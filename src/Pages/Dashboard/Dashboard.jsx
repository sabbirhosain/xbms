import { json } from 'react-router-dom'
import { useContextProvider } from '../../ContextApi/ContextApi'
import Layout from '../../Layout/Layout'
import "./Dashboard.css"
import "./Dashboard.responsive.css"
import { balance1, balance2, balance3, balance4, balance5, balance6 } from '../../Data/Images'
import { SlArrowDown } from "../../Data/Icon"
const Dashboard = () => {
  const { accessToken, refreshToken } = useContextProvider()
  return (
    <Layout title={"Dashboard"}>
      <section className='dashboard_balance'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance1} alt="" />
                  <span className='account_balance_title'>Today Sale</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance2} alt="" />
                  <span className='account_balance_title'>Expenses</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance3} alt="" />
                  <span className='account_balance_title'>Total owed</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance4} alt="" />
                  <span className='account_balance_title'>Total Due</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance5} alt="" />
                  <span className='account_balance_title'>Total Cash</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <div className="account_balance_box mb-3 mb-md-0">
                <h3 className='account_balance_count'>500.00</h3>
                <div className='d-flex align-items-center'>
                  <img className='account_balance_icon' src={balance6} alt="" />
                  <span className='account_balance_title'>My Bank</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='dashboard_progress'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="dashboard_progress_box mb-3 mb-lg-0">
                <h5 className='dashboard_progress_title'>Top 5 Customers</h5>
                <div className="d-flex align-items-center justify-content-between">
                  <span className='dashboard_coustomer_sales'>Customers Sales </span>
                  <div class="btn-group">
                    <button type="button" class="dashboard_dropdown dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Monthly <SlArrowDown className='dashboard_dropdown_arrow_icon' /></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Success example" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">12,478</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-info ps-4" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">7,546</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning ps-4" role="progressbar" aria-label="Warning example" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">6,083</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger ps-4" role="progressbar" aria-label="Danger example" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">3,963</div>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Danger example" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,560</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dashboard_progress_box mb-3 mb-lg-0">
                <h5 className='dashboard_progress_title'>Top 5 Sale Items</h5>
                <div className="d-flex align-items-center justify-content-between">
                  <span className='dashboard_coustomer_sales'>Item Sales </span>
                  <div class="btn-group">
                    <button type="button" class="dashboard_dropdown dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Monthly <SlArrowDown className='dashboard_dropdown_arrow_icon' /></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Success example" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">12,478</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-info ps-4" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">7,546</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning ps-4" role="progressbar" aria-label="Warning example" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">6,083</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger ps-4" role="progressbar" aria-label="Danger example" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">3,963</div>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Danger example" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,560</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dashboard_progress_box">
                <h5 className='dashboard_progress_title'>Top 5 Customers</h5>
                <div className="d-flex align-items-center justify-content-between">
                  <span className='dashboard_coustomer_sales'>Customers Sales </span>
                  <div class="btn-group">
                    <button type="button" class="dashboard_dropdown dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Monthly <SlArrowDown className='dashboard_dropdown_arrow_icon' /></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                      <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Success example" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">12,478</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-info ps-4" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">7,546</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning ps-4" role="progressbar" aria-label="Warning example" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">6,083</div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger ps-4" role="progressbar" aria-label="Danger example" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">3,963</div>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success ps-4" role="progressbar" aria-label="Danger example" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,560</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Dashboard