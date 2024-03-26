import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'

const UpdateProductModal = () => {
  const { showUserModal, handleUserCloseModal, } = useUserDataProvider()
  return (
    <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Add New Product</h4>
            <form >
              <div className="row">
                <div className="col-md-6">

                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" value={""} onChange={(event) => (event.target.value)} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Production Unit Name</label>
                    <input type="text" value={""} onChange={(event) => (event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Product Category</label>
                    <select className="form-select" value={""} onChange={(event) => (event.target.value)} required>
                      <option>Select Unit Name</option>
                    </select>
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Formula No</label>
                    {/* <select className="form-select" value={""} onChange={(event) => (event.target.value)} required>
                      <option>Select Unit Name</option>
                    </select> */}
                    <input type="text" value={""} onChange={(event) => (event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Quantity In Preparation Ratio</label>
                    <input type="text" value={""} onChange={(event) => (event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Select Product image</label>
                    <input type="file" accept="image/*" value={""} onChange={(event) => (event.target.value)} className="form-control" />
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

export default UpdateProductModal