import { useState } from "react"
import "./TerritoryModal.css"
import { terrritori_create } from "../../../../ApiURL";
import { toast } from "react-toastify";
import axios from "axios";
import { useContextDataProvider } from "../../../../ContextApi/ContextDataApi";


const AddTerritoryModal = () => {
  const { territory } = useContextDataProvider()
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [hideModal, setHideModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setError("Territory Name is required...!!")
      }
      const response = await axios.post(terrritori_create, { name: name }, {
        headers: { Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("Territory Added Successfully!")
        setHideModal(!hideModal);
        territory()
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };



  return (
    <div>
      {/* <!-- Modal --> */}
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="add_territory" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Setup New Territory</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="add_territory" placeholder="Name" />
                  <small className="text-danger">{error}</small>
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

export default AddTerritoryModal


{/* <!-- Button trigger modal --> */ }
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}