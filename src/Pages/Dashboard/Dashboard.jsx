import { json } from 'react-router-dom'
import { useContextProvider } from '../../ContextApi/ContextApi'
import Layout from '../../Layout/Layout'
import "./Dashboard.css"
import "./Dashboard.responsive.css"
import { balance1, balance2, balance3, balance4, balance5, balance6 } from '../../Data/Images'

const Dashboard = () => {
  const { accessToken, refreshToken } = useContextProvider()
  return (
    <Layout title={"Dashboard"}>
      <section className='account_balance'>
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

    </Layout>
  )
}

export default Dashboard