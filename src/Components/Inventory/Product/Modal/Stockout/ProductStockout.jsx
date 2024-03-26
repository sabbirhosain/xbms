import React from 'react'
import { useUserDataProvider } from '../../../../../ContextApi/UsersContextApi'

const ProductStockout = () => {
  const { showUserModal, handleUserCloseModal } = useUserDataProvider()
  
  return (
    <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Add Stockin</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Raw items</label>
                <select className="form-select" value={""} onChange={(event) => (event.target.value)} >
                  <option>Select Rawitem</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date and Time</label>
                <input type="date" value={""} onChange={(e) => (e.target.value)} className="form-control" />
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

export default ProductStockout