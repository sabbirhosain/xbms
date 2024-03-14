import { createContext, useContext, useEffect, useState } from "react"
import { terrritori_list, terrritori_delete, terrritori_update } from "../ApiURL";
import axios from "axios";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
import { useContextProvider } from "./ContextApi";
const ContextDataProvider = createContext()

const ContextDataApi = ({ children }) => {

  // =================================================================
  //                      Territory Context API Start
  // =================================================================

  // All Territory Data pagination and search filter
  const { accessToken } = useContextProvider();
  const [territoryData, setTerritoryData] = useState([]);
  console.log(accessToken.accessToken);

  const territory = async () => {
    try {
      const response = await axios.get(`${terrritori_list}`, {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyMDcwNDA1NjgxLCJpYXQiOjE3MTA0MDU2ODEsImp0aSI6IjBhNDlmZTU1ZGFiMzQ1ZTQ4ZjUwZDAzMTc1YjhmZDk4IiwidXNlcl9pZCI6MX0.yIlhSaIzbitlJGYSHY917MhX-nHZdY_GsOuxlCnMRn8`
        }
      });
      setTerritoryData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    territory();
  }, [])

  // Update Territory
  const [updateTerritory, setUpdateTerritory] = useState({ id: "", name: "" });
  const [errorTerritory, setErrorTerritory] = useState();
  const [hideModal, setHideModal] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUpdateTerritory({ ...updateTerritory, name: value });
  }

  const update_terrritori = async (id) => {
    try {
      const response = await axios.get(`${terrritori_list}${id}/`, {
        headers: { Authorization: `Bearer ${accessToken.accessToken}` }
      });
      setUpdateTerritory(response.data)
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const { name } = updateTerritory

    try {
      if (!name) {
        return setErrorTerritory("Territory Name is required...!!")
      }
      const response = await axios.put(`${terrritori_update}${updateTerritory.id}/`, updateTerritory, {
        headers: { Authorization: `Bearer ${accessToken.accessToken}` }
      });
      if (response && response.data) {
        toast.success("Territory Updated Successfully!")
        setHideModal(!hideModal);
        territory();
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }

  }



  // Delete Territory
  const delete_terrritori = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Territory Your Territory will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Territory!',
      cancelButtonText: 'Keep Territory!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          await axios.delete(`${terrritori_delete}${id}/`, {
            headers: { Authorization: `Bearer ${accessToken.accessToken}` }
          });
          Swal.fire('Deleted!', 'Territory will be deleted permanently!', 'success');
          territory();
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };


  // =================================================================
  //                      Territory Context API End
  // =================================================================








  return (
    <ContextDataProvider.Provider value={
      {
        territory, territoryData,
        delete_terrritori,
        updateTerritory, inputChangeHandler, update_terrritori, submitForm,
        errorTerritory,
        hideModal
      }
    }>
      {children}
    </ContextDataProvider.Provider>
  )
}

export default ContextDataApi



// coustom hooks
export const useContextDataProvider = () => {
  return useContext(ContextDataProvider)
};