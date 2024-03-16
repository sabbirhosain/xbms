import { Link } from "react-router-dom"
import Layout from "../../../Layout/Layout"
import "./SalesPerson.css"

const AddSalesPerson = () => {
  return (
    <Layout title={"Add Sales Person"}>
      <section className='my-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="add_parson_box">
                <h3 className="add_parson_title">Create Pack size</h3>
                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Product</label>
                        <select className="form-select" aria-label="Default select example">
                          <option defaultValue={"user"}>Napa Extra</option>
                          <option value={"1"}>Napa Extra</option>
                          <option value={"2"}>Napa Extra</option>
                          <option value={"3"}>Napa Extra</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Unit Name</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Unit Name" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Quantity Per Unit</label>
                        <select className="form-select" aria-label="Default select example">
                          <option defaultValue={"user"}>Select</option>
                          <option value={"mpo"}>MPO</option>
                          <option value={"2"}>Two</option>
                          <option value={"3"}>Three</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Current Balance</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus Base Quantity</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Sample Rate</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Distributor Price</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product</label>
                        <select className="form-select" aria-label="Default select example">
                          <option defaultValue={"user"}>Napa Extra</option>
                          <option value={"1"}>Napa Extra</option>
                          <option value={"2"}>Napa Extra</option>
                          <option value={"3"}>Napa Extra</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product</label>
                        <select className="form-select" aria-label="Default select example">
                          <option defaultValue={"user"}>Napa Extra</option>
                          <option value={"1"}>Napa Extra</option>
                          <option value={"2"}>Napa Extra</option>
                          <option value={"3"}>Napa Extra</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" placeholder="Input Rate" />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="remember_password" />
                        <label className="form-check-label" htmlFor="remember_password">Is Physician Sample</label>
                      </div>
                      <div>
                        <Link to={"/inventory-pack-size"} className='add_person_close_btn'>Close</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <button className='add_person_submit_btn'>Create Pack Size</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AddSalesPerson