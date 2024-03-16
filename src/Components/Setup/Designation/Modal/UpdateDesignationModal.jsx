import React from 'react'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const UpdateDesignationModal = () => {
  const { updateDesignations, designationsInputChange, UpdateDesignationsFrom, hideModal, error, } = useContextDataProvider()
  return (
    <div>
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_designation" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Update Designation</h4>
              <form onSubmit={UpdateDesignationsFrom}>
                <div className="mb-3">
                  <label htmlFor="add_designations" className="form-label">Name</label>
                  <input type="text" value={updateDesignations.name} onChange={designationsInputChange} className="form-control" id="add_designations" placeholder="Name" />
                  <small className="text-danger">{error}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="modal_add_btn">Update Designation</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateDesignationModal