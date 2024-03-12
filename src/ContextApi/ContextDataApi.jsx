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
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const territory = async () => {
    try {
      const response = await axios.get(`${terrritori_list}?page=${currentPage}`);
      setTerritoryData(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      setSearchFilter(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };



  useEffect(() => {
    const searchResult = searchFilter.filter(item =>
      item.name.toLowerCase().match(search.toLowerCase())
    );
    setSearchFilter(searchResult);
  }, [search])

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
      const response = await axios.get(`${terrritori_list}${id}/`);
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
      const response = await axios.put(`${terrritori_update}${updateTerritory.id}/`, updateTerritory);
      if (response && response.data) {
        toast.success("Territory Updated Successfully!")
        setHideModal(!hideModal);
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


  // =================================================================
  //                      Territory Context API End
  // =================================================================








  return (
    <ContextDataProvider.Provider value={
      {
        // territory
        territoryData,
        nextPage, prevPage, currentPage, handleNextPage, handlePrevPage,
        searchFilter, search, setSearch,
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