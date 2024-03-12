import AccountTable from "../../Components/Accounts/Table/AccountTable"
import { balance7 } from "../../Data/Images"
import Layout from "../../Layout/Layout"
import "./Accounts.css"

const Accounts = () => {
  return (
    <Layout title={"Accounts"}>
      <section>
        <div className="container">
          <div className="page_title">
            <h2 className="page_title_name">Account List</h2>
            <button className="add_action_btn">
              <img src={balance7} alt="" />Add New Account</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <AccountTable />
        </div>
      </section>
    </Layout>
  )
}

export default Accounts