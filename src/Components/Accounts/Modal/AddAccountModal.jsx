import "./AccountModal.css"

const AddAccountModal = () => {
  return (
    <div>
      <div className={`modal fade`} data-bs- id="add_new_account" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Add New Account</h4>
              <form >
                <div className="mb-3">
                  <label htmlFor="add_new_account" className="form-label">Accoint Name</label>
                  <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" id="add_new_account" placeholder="XYZ" />
                  <small className="text-danger">{""}</small>
                </div>
                <div className="mb-3">
                  <label htmlFor="add_new_balance" className="form-label">Opening Balance</label>
                  <input type="text" value={""} onChange={(e) => (e.target.value)} className="form-control" id="add_new_balance" placeholder="00" />
                  <small className="text-danger">{""}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="modal_add_btn">Add Territory</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAccountModal