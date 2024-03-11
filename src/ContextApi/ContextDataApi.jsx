import { createContext, useContext, useEffect, useState } from "react"
import { terrritori_list, terrritori_delete } from "../ApiURL";
import axios from "axios";
import Swal from 'sweetalert2';
const ContextDataProvider = createContext()

const ContextDataApi = ({ children }) => {
  const [territoryData, setTerritoryData] = useState("");


  // All Territory Data
  const territory = async () => {
    try {
      const response = await axios.get(terrritori_list);
      setTerritoryData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

// Update 
const update_terrritori = (id) => {
  console.log(id);
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
          await axios.delete(`${terrritori_delete}${id}/`);
          Swal.fire('Deleted!', 'Territory will be deleted permanently!', 'success');
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };








  useEffect(() => {
    territory();
  }, [territoryData])

  return (
    <ContextDataProvider.Provider value={{ territoryData, delete_terrritori,update_terrritori }}>
      {children}
    </ContextDataProvider.Provider>
  )
}

export default ContextDataApi



// coustom hooks
export const useContextDataProvider = () => {
  return useContext(ContextDataProvider)
};