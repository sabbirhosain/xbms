import React, { useState } from 'react'
import { useUserDataProvider } from '../../../../../ContextApi/UsersContextApi'
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi'
import axios from 'axios'
import { product_stock_in_create } from '../../../../../ApiURL'
import { toast } from 'react-toastify'

const ProductStockin = () => {
  const { showUserModal, handleUserCloseModal } = useUserDataProvider()
  const { packsizeList, productStockinFetch } = useInventoryDataProvider()

  const [productPacksize, setProductPacksize] = useState("")
  const [quantity, setQuantity] = useState("")
  const [dateTime, setDateTime] = useState("")
  const resetFields = () => { setProductPacksize(""), setQuantity(""), setDateTime("") };

  const addProductStockoutHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(product_stock_in_create, { pack_size: productPacksize, date_time: dateTime, quantity: quantity });

      if (response && response.data) {
        toast.success("Stockin Added Successfully!")
        handleUserCloseModal();
        resetFields();
        // productStockinFetch(1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Add Stockin</h4>
            <form onSubmit={addProductStockoutHandleSubmit}>
              <div className="mb-3">
                <label className="form-label">Pack Size</label>
                <select className="form-select" value={productPacksize} onChange={(event) => setProductPacksize(event.target.value)} >
                  <option value={""}>Select Packsize</option>
                  {
                    packsizeList.map((item, index) => (<option key={index} value={item.pack_size}>{item.pack_size}</option>))
                  }
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder='00.00' />
              </div>
              <div className="mb-3">
                <label className="form-label">Date and Time</label>
                <input type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="form-control" />
              </div>
              <div className="d-flex align-items-center mt-4">
                <button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button>
                <button type="submit" className="modal_add_btn">Add Stockin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductStockin