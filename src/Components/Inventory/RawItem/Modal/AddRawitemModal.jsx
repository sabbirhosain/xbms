import React, { useState } from 'react'
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { rawitems_create } from '../../../../ApiURL'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const AddRawitemModal = () => {
  const { rawitemFetch, showUserModal, handleUserCloseModal, } = useUserDataProvider()
  const { unitTypesList } = useContextDataProvider()
  const [name, setName] = useState("")
  const [openingBalance, setOpeningBalance] = useState("")
  const [recorderLabel, setRecorderLabel] = useState("")
  const [unitName, setUnitName] = useState("")
  const resetFields = () => { setName(""), setOpeningBalance(""), setRecorderLabel(""), setUnitName("") };

  const addRawitemHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(rawitems_create, { name: name, unit_name: unitName, opening_balance: openingBalance, recorder_level: recorderLabel });

      if (response && response.data) {
        toast.success("Rawitem Added Successfully!")
        handleUserCloseModal();
        resetFields();
        rawitemFetch(1)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Add New Raw Item</h4>
            <form onSubmit={addRawitemHandleSubmit}>
              <div className="row">
                <div className="col-md-6">

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Recorder Label</label>
                    <input type="text" value={recorderLabel} onChange={(event) => setRecorderLabel(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Unit Name</label>
                    <select className="form-select" value={unitName} onChange={(event) => setUnitName(event.target.value)} required>
                      <option>Select Unit Name</option>
                      {unitTypesList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Opening Balance</label>
                    <input type="text" value={openingBalance} onChange={(event) => setOpeningBalance(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>
                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Add Rawitem</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRawitemModal