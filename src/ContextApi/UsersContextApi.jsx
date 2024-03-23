import { createContext, useContext, useEffect, useState } from "react"
import { selesPerson_delete, selesPerson_list, user_delete, user_list, user_update } from "../ApiURL";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserContextDataProvider = createContext()
const UsersContextApi = ({ children }) => {

  const [hideModal, setHideModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const handleUserCloseModal = () => { setShowUserModal(false) };
  const handleUserOpenModal = () => { setShowUserModal(true) };

  // All User List
  const [userError, setUserError] = useState(null);
  const [isLoadedUser, setIsLoadedUser] = useState(false);
  const [userList, setUserList] = useState([]);
  const [totalRowsUser, setTotalRowsUser] = useState(0);
  const paginationComponentOptionsUser = { noRowsPerPage: true };
  const [selectedUserType, setSelectedUserType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const userTypes = ['area_manager', 'mpo', 'user', 'superadmin', 'accountant', 'factory', 'salesperson'];

  useEffect(() => {
    allUserFetch(1);
  }, [selectedUserType, searchQuery])

  const allUserFetch = async (page) => {
    try {
      setIsLoadedUser(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${user_list}?user_type=${selectedUserType}&query=${searchQuery}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setUserList(response.data.results);
      setTotalRowsUser(response.data.count);
      setIsLoadedUser(false);
    } catch (error) {
      setIsLoadedUser(true);
      setUserError(error);
    }
  }

  const userHandlePageChange = page => {
    allUserFetch(page);
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    allUserFetch(1);
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }





  // Update User
  const [updateUser, setUpdateUser] = useState({ username: "", first_name: "", last_name: "", email: "", phone: "", user_type: "", picture: null });

  const userInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  const userHandleImageChange = (e) => {
    setUpdateUser({ ...updateUser, picture: e.target.files[0] });
  };

  const update_user = async (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${user_list}${id}/`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setUpdateUser(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const userSubmitForm = async (e) => {
    e.preventDefault();
    const { username, first_name, last_name, email, phone, user_type, picture } = updateUser
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('user_type', user_type);
      if (picture) {
        formData.append('picture', picture);
      }
      const response = await axios.put(`${user_update}${updateUser.id}/edit/`, formData, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("User Update Updated Successfully!")
        setHideModal(!hideModal);
        allUserFetch(1);
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }

  }

  // Delete User

  const delete_user = (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete User Your User will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete User!',
      cancelButtonText: 'Keep User!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${user_delete}${id}/delete/`, {
            headers: { Authorization: `Bearer ${token.access}` }
          });
          Swal.fire('Deleted!', 'User will be deleted permanently!', 'success');
          allUserFetch(1);
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };




  // =======================================
  //              Selse Person 
  // =======================================

  // All Selse Person  List
  const [selesPersonError, setSelesPersonError] = useState(null);
  const [isLoadedSelesPerson, setIsLoadedSelesPerson] = useState(false);
  const [selesPersonList, setSelesPersonList] = useState([]);
  const [totalRowsSelesPerson, setTotalRowsSelesPerson] = useState(0);
  const paginationComponentOptionsSelesPerson = { noRowsPerPage: true };
  const [selectedSelesPersonType, setSelectedSelesPersonType] = useState("");
  const [selesPersonSearchQuery, setSelesPersonSearchQuery] = useState("");

  useEffect(() => {
    selesPersonFetch(1);
  }, [selectedSelesPersonType, selesPersonSearchQuery])

  const selesPersonFetch = async (page) => {
    try {
      setIsLoadedSelesPerson(true);
      const response = await axios.get(`/api/auth/salespersons/?query=${selesPersonSearchQuery}&designation=${selectedSelesPersonType}&page=${page}`);
      setSelesPersonList(response.data.results);
      setTotalRowsSelesPerson(response.data.count);
      setIsLoadedSelesPerson(false);
    } catch (error) {
      setIsLoadedSelesPerson(true);
      setSelesPersonError(error);
    }
  }

  const selesPersonHandlePageChange = page => {
    selesPersonFetch(page);
  };

  const handleSelesPersonTypeChange = (e) => {
    setSelectedSelesPersonType(e.target.value);
    selesPersonFetch(1);
  }

  const handleSelesPersonSearchInputChange = (e) => {
    setSelesPersonSearchQuery(e.target.value);
  }

  // Delete Selse Person

  const deleteSelsePerson = (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Selse Person Your Selse Person will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Selse Person!',
      cancelButtonText: 'Keep Selse Person!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${selesPerson_delete}${id}/`, {
            headers: { Authorization: `Bearer ${token.access}` }
          });
          Swal.fire('Deleted!', 'Selse Person will be deleted permanently!', 'success');
          selesPersonFetch(1);
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };


  // ================================================
  //                  Suppliers 
  // ============================================
  // All Selse Person  List
  const [suppliersError, setSuppliersError] = useState(null);
  const [isLoadedSuppliers, setIsLoadedSuppliers] = useState(false);
  const [suppliersList, setSuppliersList] = useState([]);
  const [totalRowsSuppliers, setTotalRowsSuppliers] = useState(0);
  const paginationComponentOptionsSuppliers = { noRowsPerPage: true };
  const [suppliersSearchQuery, setSuppliersSearchQuery] = useState("");

  useEffect(() => {
    suppliersFetch(1);
  }, [suppliersSearchQuery])

  const suppliersFetch = async (page) => {
    try {
      setIsLoadedSuppliers(true);
      const response = await axios.get(`/api/auth/suppliers/?query=${suppliersSearchQuery}&page=${page}`);
      setSuppliersList(response.data.results);
      setTotalRowsSuppliers(response.data.count);
      setIsLoadedSuppliers(false);
    } catch (error) {
      setIsLoadedSuppliers(true);
      setSuppliersError(error);
    }
  }

  const suppliersHandlePageChange = page => {
    suppliersFetch(page);
  };


  const handleSuppliersSearchInputChange = (e) => {
    setSuppliersSearchQuery(e.target.value);
  }


  // Update Suppliers
  const [updateSuppliers, setUpdateSuppliers] = useState({ id: "", name: "", contact_no: "", address: "", opening_balance: "" });

  const SuppliersInputChange = (e) => {
    const { name, value } = e.target
    setUpdateSuppliers({ ...updateSuppliers, [name]: value });
  }

  const getSuppliers = async (id) => {
    try {
      const response = await axios.get(`/api/auth/suppliers/${id}/`)
      setUpdateSuppliers(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const UpdateSuppliersFrom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/auth/suppliers/${updateSuppliers.id}/`, updateSuppliers,);
      if (response && response.data) {
        toast.success("Suppliers Updated Successfully!")
        setHideModal(!hideModal);
        suppliersFetch(1)
      }
    } catch (error) {
      console.error(error);
    }

  }


  // Delete Suppliers

  const deleteSuppliers = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Suppliers Your Suppliers will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Suppliers!',
      cancelButtonText: 'Keep Suppliers!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/auth/suppliers/${id}/`)
          Swal.fire('Deleted!', 'Suppliers will be deleted permanently!', 'success');
          suppliersFetch(1);
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };








  return (
    <UserContextDataProvider.Provider value={
      {
        allUserFetch, delete_user, update_user, hideModal,
        showUserModal, handleUserCloseModal, updateUser, handleUserOpenModal, userInputChangeHandler, handleSearchInputChange, userHandleImageChange, userSubmitForm, userTypes, selectedUserType, handleUserTypeChange,
        userList, userError, isLoadedUser, totalRowsUser, paginationComponentOptionsUser, userHandlePageChange,
        // seles person
        selesPersonFetch, selesPersonList, selesPersonError, isLoadedSelesPerson, totalRowsSelesPerson, paginationComponentOptionsSelesPerson, selesPersonHandlePageChange, selectedSelesPersonType, handleSelesPersonSearchInputChange, handleSelesPersonTypeChange, deleteSelsePerson,
        // Suppliers
        suppliersFetch, suppliersList, suppliersError, paginationComponentOptionsSuppliers, totalRowsSuppliers, isLoadedSuppliers, suppliersHandlePageChange, handleSuppliersSearchInputChange, deleteSuppliers, getSuppliers, updateSuppliers, SuppliersInputChange, UpdateSuppliersFrom

      }}>
      {children}
    </UserContextDataProvider.Provider>
  )
}

export default UsersContextApi

// coustom hooks
export const useUserDataProvider = () => {
  return useContext(UserContextDataProvider)
};