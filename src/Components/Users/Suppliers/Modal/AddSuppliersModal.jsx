import React, { useState } from 'react'
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddSuppliersModal = () => {
  const { suppliersFetch, showUserModal, handleUserCloseModal, } = useUserDataProvider()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [openingBalance, setOpeningBalance] = useState("")
  const resetFields = () => { setName(""), setPhone(""), setAddress(""), setOpeningBalance("") };

  const addSuppliersHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/suppliers/", { name: name, contact_no: phone, address: address, opening_balance: openingBalance });

      if (response && response.data) {
        toast.success("Suppliers Added Successfully!")
        handleUserCloseModal();
        resetFields();
        suppliersFetch(1)
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
            <h4 className="modal_title">Add New Suppliers</h4>
            <form onSubmit={addSuppliersHandleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" placeholder="sabbir" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contact No</label>
                    <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} className="form-control" placeholder="+880 123 456 7890" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Opening Balance</label>
                    <input type="number" value={openingBalance} onChange={(event) => setOpeningBalance(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Add Suppliers</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSuppliersModal