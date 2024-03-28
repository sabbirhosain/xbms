import React, { useEffect, useState } from 'react'
import Layout from '../../../Layout/Layout'
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi'
import { useContextDataProvider } from '../../../ContextApi/ContextDataApi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { packsize_list, packsize_update } from '../../../ApiURL'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateInventoryPackSize = () => {
  const { unitTypesList } = useContextDataProvider()
  const { productList } = useInventoryDataProvider()
  const { id } = useParams()
  const navigate = useNavigate()
  const [updatePacksize, setUpdatePacksize] = useState({
    product: "",
    pack_size: "",
    unit_name: "",
    pack_type: "",
    product_quantity_per_unit: "",
    opening_balance: "",
    current_balance: "",
    recorder_level: "",
    bonus_base_quantity: "",
    bonus_rate_per_base_quantity: "",
    sample_rate: "",
    costing_price: "",
    company_price: "",
    distributor_price: "",
    mrp: "",
    is_physician_sample: false
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUpdatePacksize(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const packSizeInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatePacksize({ ...updatePacksize, [name]: value });
  };

  useEffect(() => {
    const getPacksize = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('access_token'));
        const response = await axios.get(`${packsize_list}${id}/`, {
          headers: { Authorization: `Bearer ${token.access}` }
        });
        setUpdatePacksize(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getPacksize()
  }, [])

  const updatePacksizeHandler = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.put(`${packsize_update}${id}/`, updatePacksize, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Packsize Updated Successfully!")
        navigate("/inventory-pack-size")
      }
    } catch (error) {
      console.error('Error updating salesperson:', error);
    }
  }

  return (
    <Layout title={"Update Inventory PackSize"}>
      <section className='my-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="add_parson_box">
                <h3 className="add_parson_title">Update Pack size</h3>
                <form onSubmit={updatePacksizeHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <select className="form-select" name="product" value={updatePacksize.product} onChange={packSizeInputChange}>
                          <option value={""}>Select Product name</option>
                          {
                            productList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Size</label>
                        <input type="text" name='pack_size' value={updatePacksize.pack_size} onChange={packSizeInputChange} className="form-control" placeholder="pack name" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product quantity per unit</label>
                        <input type="number" name='product_quantity_per_unit' value={updatePacksize.product_quantity_per_unit} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Current Balance</label>
                        <input type="number" name='current_balance' value={updatePacksize.current_balance} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus Base Quantity</label>
                        <input type="number" name='bonus_base_quantity' value={updatePacksize.bonus_base_quantity} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Sample Rate</label>
                        <input type="number" name='sample_rate' value={updatePacksize.sample_rate} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Distributor Price</label>
                        <input type="number" name='distributor_price' value={updatePacksize.distributor_price} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">MRP</label>
                        <input type="number" name='mrp' value={updatePacksize.mrp} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Unit Name</label>
                        <select className="form-select" name="unit_name" value={updatePacksize.unit_name} onChange={packSizeInputChange}>
                          <option value={""}>Select unit name</option>
                          {
                            unitTypesList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                          }
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Pack Type</label>
                        <select className="form-select" name="pack_type" value={updatePacksize.pack_type} onChange={packSizeInputChange}>
                          <option value={""}>Select Type</option>
                          <option value={"loquid"} selected={updatePacksize.pack_type === "loquid"}>Loquid</option>
                          <option value={"malt"} selected={updatePacksize.pack_type === "malt"}>Malt</option>
                          <option value={"ointment"} selected={updatePacksize.pack_type === "ointment"}>Ointment</option>
                          <option value={"tab/cap"} selected={updatePacksize.pack_type === "tab/cap"}>Tab/Cap</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Opening Balance</label>
                        <input type="number" name='opening_balance' value={updatePacksize.opening_balance} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Recorder level</label>
                        <input type="number" name='recorder_level' value={updatePacksize.recorder_level} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bonus rate per base quantity</label>
                        <input type="number" name='bonus_rate_per_base_quantity' value={updatePacksize.bonus_rate_per_base_quantity} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Company price</label>
                        <input type="number" name='company_price' value={updatePacksize.company_price} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Costing price</label>
                        <input type="number" name='costing_price' value={updatePacksize.costing_price} onChange={packSizeInputChange} className="form-control" required />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" name="is_physician_sample" checked={updatePacksize.is_physician_sample} onChange={handleCheckboxChange} id="remember_password" />
                        <label className="form-check-label" htmlFor="remember_password">Is Physician Sample</label>
                      </div>
                      <div>
                        <Link to={"/inventory-pack-size"} className='add_person_close_btn'>Close</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <button className='add_person_submit_btn'>Update Pack Size</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    </Layout >
  )
}

export default UpdateInventoryPackSize