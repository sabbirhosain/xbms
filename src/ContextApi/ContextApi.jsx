import React, { createContext, useContext, useState } from 'react';
const ContextProvider = createContext();

const ContextApi = ({ children }) => {
  // password show toggle
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => {
    setShowPassword(!showPassword);
  };

  // user input data handel
  const [user, setUser] = useState({ userName: '', userPassword: '' });
  console.log(user);
  const inputValue = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // write condition
  };












  return (
    <ContextProvider.Provider value={{ showPassword, passwordShowToggle, user, inputValue, formSubmit }}>
      {children}
    </ContextProvider.Provider>
  )
}
export default ContextApi

// coustom hooks
export const useContextProvider = () => {
  return useContext(ContextProvider)
};