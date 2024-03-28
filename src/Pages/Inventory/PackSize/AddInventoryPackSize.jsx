import React, { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { packsize_create } from '../../../ApiURL'

const AddInventoryPackSize = () => {
  const { unitTypesList } = useContextDataProvider()
  const { productList } = useInventoryDataProvider()
  const navigate = useNavigate()


  const [product, setProduct] = useState("")
  const [packsize, setPacksize] = useState("")
  const [unitname, setUnitname] = useState("")
  const [packtype, setPacktype] = useState("")
  const [productQuantityPerUnit, setProductQuantityPerUnit] = useState("")
  const [openingBalance, setOpeningBalance] = useState("")
  const [currentBalance, setCurrentBalance] = useState("")
  const [recorderLevel, setRecorderLevel] = useState("")
  const [bonusBaseQuantity, setBonusBaseQuantity] = useState("")
  const [bonusRatePerBaseQuantity, setBonusRatePerBaseQuantity] = useState("")
  const [sampleRate, setSampleRate] = useState("")
  const [costingPrice, setCostingPrice] = useState("")
  const [companyPrice, setCompanyPrice] = useState("")
  const [distributorPrice, setDistributorPrice] = useState("")
  const [mrp, setMrp] = useState("")
  const [isPhysicianSample, setIsPhysicianSample] = useState(false)
  const physicianHandler = () => { setIsPhysicianSample(!isPhysicianSample) }

  const addPacksizeHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.post(packsize_create, {
        product: product,
        pack_size: packsize,
        unit_name: unitname,
        pack_type: packtype,
        product_quantity_per_unit: productQuantityPerUnit,
        opening_balance: openingBalance,
        current_balance: currentBalance,
        recorder_level: recorderLevel,
        bonus_base_quantity: bonusBaseQuantity,
        bonus_rate_per_base_quantity: bonusRatePerBaseQuantity,
        sample_rate: sampleRate,
        costing_price: costingPrice,
        company_price: companyPrice,
        distributor_price: distributorPrice,
        mrp: mrp,
        is_physician_sample: isPhysicianSample
      }, { headers: { Authorization: `Bearer ${token.access}` } });

      if (response && response.data) {
        toast.success("Packsize Added Successfully!")
        navigate("/inventory-pack-size")
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Layout title={"Add Inventory PackSize"}>
      <section className='my-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="add_parson_box">
                <h3 className="add_parson_title">Create Pack size</h3>
                <form onSubmit={addPacksizeHandleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <select className="form-select" value={product} onChange={(event) => setProduct(event.target.value)}>
                          <option value={""}>Select Product name</option>
                          {
                            productList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" value={packsize} onChange={(e) => setPacksize(e.target.value)} className="form-control" placeholder="pack name" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product quantity per unit</label>
                        <input type="number" value={productQuantityPerUnit} onChange={(e) => setProductQuantityPerUnit(e.target.value)} className="form-control" placeholder="00.00" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Current Balance</label>
                        <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus Base Quantity</label>
                        <input type="number" value={bonusBaseQuantity} onChange={(e) => setBonusBaseQuantity(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Sample Rate</label>
                        <input type="number" value={sampleRate} onChange={(e) => setSampleRate(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Distributor Price</label>
                        <input type="number" value={distributorPrice} onChange={(e) => setDistributorPrice(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">MRP</label>
                        <input type="number" value={mrp} onChange={(e) => setMrp(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Unit Name</label>
                        <select className="form-select" value={unitname} onChange={(e) => setUnitname(e.target.value)}>
                          <option value={""}>Select unit name</option>
                          {
                            unitTypesList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Type</label>
                        <select className="form-select" value={packtype} onChange={(e) => setPacktype(e.target.value)}>
                          <option value={""}>Select Type</option>
                          <option value={"loquid"}>Loquid</option>
                          <option value={"malt"}>Malt</option>
                          <option value={"ointment"}>Ointment</option>
                          <option value={"tab/cap"}>Tab/Cap</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Opening Balance</label>
                        <input type="number" value={openingBalance} onChange={(e) => setOpeningBalance(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Recorder level</label>
                        <input type="number" value={recorderLevel} onChange={(e) => setRecorderLevel(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus rate per base quantity</label>
                        <input type="number" value={bonusRatePerBaseQuantity} onChange={(e) => setBonusRatePerBaseQuantity(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Company price</label>
                        <input type="number" value={companyPrice} onChange={(e) => setCompanyPrice(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Costing price</label>
                        <input type="number" value={costingPrice} onChange={(e) => setCostingPrice(e.target.value)} className="form-control" placeholder="00.00" />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="remember_password" onChange={physicianHandler} />
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

export default AddInventoryPackSize