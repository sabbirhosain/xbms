import { createContext, useContext, useEffect, useState } from "react"
import { user_delete, user_list, user_update } from "../ApiURL";
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

  useEffect(() => {
    allUserFetch(1);
  }, [])

  const allUserFetch = async (page) => {
    try {
      setIsLoadedUser(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${user_list}?page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
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


















  return (
    <UserContextDataProvider.Provider value={
      {
        allUserFetch, delete_user, update_user, hideModal,
        showUserModal, handleUserCloseModal, updateUser, handleUserOpenModal, userInputChangeHandler, userHandleImageChange, userSubmitForm,
        userList, userError, isLoadedUser, totalRowsUser, paginationComponentOptionsUser, userHandlePageChange
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