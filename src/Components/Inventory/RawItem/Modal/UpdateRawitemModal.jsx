import React from 'react'
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const UpdateRawitemModal = () => {
  const { hideModal, updateRawitem, rawitemInputChange, UpdateRawitemFrom, } = useInventoryDataProvider()
  const { unitTypesList } = useContextDataProvider()
  return (
    <div className={`modal p-0 fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_rawitem" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Update Raw Item</h4>
            <form onSubmit={UpdateRawitemFrom}>
              <div className="row">
                <div className="col-md-6">

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' value={updateRawitem.name} onChange={rawitemInputChange} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Opening Balance</label>
                    <input type="text" name='opening_balance' value={updateRawitem.opening_balance} onChange={rawitemInputChange} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Recorder Label</label>
                    <input type="text" name='recorder_level' value={updateRawitem.recorder_level} onChange={rawitemInputChange} className="form-control" required />
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Unit Name</label>
                    <select className="form-select" name="unit_name" value={updateRawitem.unit_name} onChange={rawitemInputChange} required>
                      <option>Select Unit Name</option>
                      {unitTypesList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Update Rawitem</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateRawitemModal