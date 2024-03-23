import { useUserDataProvider } from "../../../../ContextApi/UsersContextApi"

const UpdateSuppliersModal = () => {
  const { hideModal, updateSuppliers, SuppliersInputChange, UpdateSuppliersFrom } = useUserDataProvider()
  return (
    <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_suppliers" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Update Suppliers</h4>
            <form onSubmit={UpdateSuppliersFrom}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={updateSuppliers.name} onChange={SuppliersInputChange} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contact No</label>
                    <input type="number" name="contact_no" value={updateSuppliers.contact_no} onChange={SuppliersInputChange} className="form-control" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" name="address" value={updateSuppliers.address} onChange={SuppliersInputChange} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Opening Balance</label>
                    <input type="number" name="opening_balance" value={updateSuppliers.opening_balance} onChange={SuppliersInputChange} className="form-control" required />
                  </div>

                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><div><button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button></div></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Update Suppliers</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateSuppliersModal