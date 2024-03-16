import React from 'react'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const UpdateUnitTypeModal = () => {
  const { updateUnitType, unittypeInputChange, UpdateUnitTypeFrom, error, hideModal } = useContextDataProvider()
  return (
    <div>
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_unitType" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Update UnitType</h4>
              <form onSubmit={UpdateUnitTypeFrom}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text" value={updateUnitType.name} onChange={unittypeInputChange} className="form-control" id="add_territory" placeholder="Name" />
                  <small className="text-danger">{error}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="modal_add_btn">Update UnitType</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUnitTypeModal