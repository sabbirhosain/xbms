import { useContextDataProvider } from "../../../../ContextApi/ContextDataApi";
import "./TerritoryModal.css"
const UpdateTerritoryModal = () => {
  const { updateTerritory, inputChangeHandler, submitForm, errorTerritory,hideModal } = useContextDataProvider();

  return (
    <div>
      {/* <!-- Modal --> */}
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} id="update_territory" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Update Territory</h4>
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text"
                    value={updateTerritory.name}
                    onChange={inputChangeHandler}
                    className="form-control"
                    id="add_territory"
                    placeholder="Name" />
                  <small className="text-danger">{errorTerritory}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="modal_add_btn">Update Territory</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UpdateTerritoryModal



{/* <!-- Button trigger modal --> */ }
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}