import "./TerritoryModal.css"
import { useContextDataProvider } from "../../../../ContextApi/ContextDataApi";


const AddTerritoryModal = () => {
  const { terrritoriHandleSubmit, terrritoriName, setTerritoryName, error, showModal, handleCloseModal, } = useContextDataProvider()

  return (
    <div>
      <div className={`modal ${showModal ? "show d-block" : ""}`} data-bs- id="add_territory" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Setup New Territory</h4>
              <form onSubmit={terrritoriHandleSubmit}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text" value={terrritoriName} onChange={(e) => setTerritoryName(e.target.value)} className="form-control" id="add_territory" placeholder="Name" />
                  <small className="text-danger">{error}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" onClick={handleCloseModal}>Close</button>
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

export default AddTerritoryModal


{/* <!-- Button trigger modal --> */ }
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}