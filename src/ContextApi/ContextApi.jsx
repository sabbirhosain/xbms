import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const ContextProvider = createContext();

const ContextApi = ({ children }) => {
  // password show toggle
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => {
    setShowPassword(!showPassword);
  };

  // token store in localhost
  const [accessToken, setAccessToken] = useState({ user_data: null, accessToken: null });
  const [refreshToken, setRefreshToken] = useState({ user_data: null, refreshToken: null });

  const access_data = () => {
    const data = localStorage.getItem("access_token")
    if (data) {
      const parse_data = JSON.parse(data)
      setAccessToken({
        ...accessToken,
        user_data: parse_data.user,
        accessToken: parse_data.access
      })
    }
  }

  const refresh_data = () => {
    const data = localStorage.getItem("refresh_token")
    if (data) {
      const parse_data = JSON.parse(data)
      setRefreshToken({
        ...refreshToken,
        user_data: parse_data.user,
        accessToken: parse_data.access
      })
    }
  }


  useEffect(() => {
    access_data();
    refresh_data();
  }, [""]);


  const logout = () => {
    setAccessToken({
      ...accessToken,
      user_data: null,
      accessToken: null
    })
    setRefreshToken({
      ...refreshToken,
      user_data: null,
      accessToken: null
    })
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast.success("Logout Success..!!")
  };



  return (
    <ContextProvider.Provider value={{ showPassword, passwordShowToggle, accessToken, setAccessToken, refreshToken, setRefreshToken, logout }}>
      {children}
    </ContextProvider.Provider>
  )
}

export default ContextApi

// coustom hooks
export const useContextProvider = () => {
  return useContext(ContextProvider)
};