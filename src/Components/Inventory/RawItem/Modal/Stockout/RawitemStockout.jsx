import React, { useState } from 'react'
import { useUserDataProvider } from '../../../../../ContextApi/UsersContextApi'
import { useInventoryDataProvider } from '../../../../../ContextApi/InventoryContextApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { rawitem_stock_out_create } from '../../../../../ApiURL'

const RawitemStockout = () => {
  const { showUserModal, handleUserCloseModal, } = useUserDataProvider()
  const { rawitemList, rawitemStockoutFetch } = useInventoryDataProvider()
  const [rawitem, setRawitem] = useState("")
  const [quantity, setQuantity] = useState("")
  const [dateTime, setDateTime] = useState("")
  const resetFields = () => { setRawitem(""), setQuantity(""), setDateTime("") };

  const addRawStockoutHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(rawitem_stock_out_create, { raw_item: rawitem, date_time: dateTime, quantity: quantity });

      if (response && response.data) {
        toast.success("Stockout Added Successfully!")
        handleUserCloseModal();
        resetFields();
        rawitemStockoutFetch(1);
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
            <h4 className="modal_title">Add Stockout</h4>
            <form onSubmit={addRawStockoutHandleSubmit}>
              <div className="mb-3">
                <label className="form-label">Raw items</label>
                <select className="form-select" value={rawitem} onChange={(event) => setRawitem(event.target.value)} >
                  <option>Select Rawitem</option>
                  {rawitemList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date and Time</label>
                <input type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="form-control" />
              </div>
              <div className="d-flex align-items-center mt-4">
                <button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button>
                <button type="submit" className="modal_add_btn">Add Stockout</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RawitemStockout