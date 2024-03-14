import { createContext, useContext, useEffect, useState } from "react"
import { terrritori_list, terrritori_delete, terrritori_update } from "../ApiURL";
import axios from "axios";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
const ContextDataProvider = createContext()

const ContextDataApi = ({ children }) => {

  // =================================================================
  //                      Territory Context API Start
  // =================================================================

  // All Territory Data pagination and search filter
  const [territoryData, setTerritoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const territory = async () => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${terrritori_list}`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setTerritoryData(response.data.results);
      setFilteredData(response.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    territory();
  }, [])


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = territoryData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };




  // Update Territory
  const [updateTerritory, setUpdateTerritory] = useState({ id: "", name: "" });
  const [errorTerritory, setErrorTerritory] = useState();
  const [hideModal, setHideModal] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUpdateTerritory({ ...updateTerritory, name: value });
  }

  const update_terrritori = async (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${terrritori_list}${id}/`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setUpdateTerritory(response.data)
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const { name } = updateTerritory
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setErrorTerritory("Territory Name is required...!!")
      }
      const response = await axios.put(`${terrritori_update}${updateTerritory.id}/`, updateTerritory, {
        headers: { Authorization: `Bearer ${token.access}` }
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
    const token = JSON.parse(localStorage.getItem('access_token'));
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
            headers: { Authorization: `Bearer ${token.access}` }
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
        territory, territoryData, searchTerm, filteredData, handleSearch,
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