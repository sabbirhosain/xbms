import { createContext, useContext, useEffect, useState } from "react"
import { user_list } from "../ApiURL";
import axios from "axios";

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




  // Create User




















  return (
    <UserContextDataProvider.Provider value={
      {
        allUserFetch,
        showUserModal,handleUserCloseModal, handleUserOpenModal,
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