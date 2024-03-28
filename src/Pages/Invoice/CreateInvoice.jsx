import "./Invoice.css"
import Layout from '../../Layout/Layout'
import { Link, NavLink } from 'react-router-dom'
import { balance7 } from '../../Data/Images'
import InvoiceTable from '../../Components/Invoice/InvoiceTable/InvoiceTable'

const CreateInvoice = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className='page_title_name my-4'>Creating New Invoice</h2>
        <div className="row">
          <div className="mb-3 col-sm-4">
            <label className="form-label">Invoice No.</label>
            <input type="number" className="form-control" placeholder="00.00" required />
          </div>
          <div className="mb-3 col-sm-4">
            <label className="form-label">Sales Person</label>
            <select className="form-select">
              <option value={""}>Select Type</option>
              <option value={"loquid"}>Loquid</option>
              <option value={"malt"}>Malt</option>
              <option value={"ointment"}>Ointment</option>
              <option value={"tab/cap"}>Tab/Cap</option>
            </select>
          </div>
          <div className="mb-3 col-sm-4">
            <label className="form-label">Territory</label>
            <input type="number" className="form-control" placeholder="00.00" required />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-sm-4">
            <label className="form-label">Date</label>
            <input type="number" className="form-control" placeholder="00.00" required />
          </div>
          <div className="mb-3 col-sm-8">
            <label className="form-label">Address</label>
            <input type="number" className="form-control" placeholder="00.00" required />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between py-4">
            <div>
              <NavLink className="setup_page_link" to={"/create-new-invoice"}>Invoice</NavLink>
              <NavLink className="setup_page_link" to={"/create-sample-invoice"}>Sample</NavLink>
            </div>
            <div><button className="add_action_btn"> <img src={balance7} />Add Product</button></div>
          </div>
          <InvoiceTable />
        </div>
        <div className="row justify-content-between py-5">
          <div className="col-sm-5">
            <div className="mb-3">
              <label className="form-label">Total Sample</label>
              <input type="text" className="form-control" placeholder="00.00" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Take in Words</label>
              <input type="text" className="form-control" placeholder="00.00" required />
            </div>
          </div>
          <div className="col-sm-4">
            <ul class="list-group rounded-0">
              <li class="list-group-item bg-transparent fw-medium d-flex justify-content-between align-items-center"> Total : <span>12345</span></li>
              <li class="list-group-item bg-transparent fw-medium d-flex justify-content-between align-items-center"> (-) Carrying : <span>12345</span> </li>
              <li class="list-group-item bg-transparent fw-medium d-flex justify-content-between align-items-center"> Discount: <span>12345</span> </li>
              <li class="list-group-item bg-transparent fw-medium d-flex justify-content-between align-items-center"> Payable: <span>12345</span> </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end pb-3">
          <div>
            <Link to="" className="create_invoice_btn mx-0">Close</Link>
            <Link to="" className="create_invoice_btn mx-3">Print Invoice</Link>
            <Link to="" className="new_company_btn d-inline mx-0">Add Invoice </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateInvoice