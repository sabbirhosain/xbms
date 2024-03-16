import React from 'react'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const AddUnitTypeModal = () => {
  const { unitTypeName, setUnitTypeName, unitTypeHandleSubmit, error, hideModal } = useContextDataProvider()
  return (
    <div>
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="add_unitType" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Setup New UnitType</h4>
              <form onSubmit={unitTypeHandleSubmit}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text" value={unitTypeName} onChange={(e) => setUnitTypeName(e.target.value)} className="form-control" id="add_territory" placeholder="Name" />
                  <small className="text-danger">{error}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="modal_add_btn">Add UnitType</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUnitTypeModal