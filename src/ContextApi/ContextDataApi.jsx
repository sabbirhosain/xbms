import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
const ContextDataProvider = createContext()

const ContextDataApi = ({ children }) => {
  const [territoryData, setTerritoryData] = useState("");
  console.log(territoryData);
  const territory = async () => {
    try {
      const response = await axios.get('https://xms-esxe.onrender.com/api/territories/');
      setTerritoryData(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    territory();
  }, [""])

  return (
    <ContextDataProvider.Provider value={{territoryData}}>
      {children}
    </ContextDataProvider.Provider>
  )
}

export default ContextDataApi



// coustom hooks
export const useContextDataProvider = () => {
  return useContext(ContextDataProvider)
};