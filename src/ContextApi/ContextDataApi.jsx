import { createContext, useContext, useEffect, useState } from "react"
import { terrritori_list, terrritori_delete, terrritori_update, designations_list, designations_create, designations_update, designations_delete, terrritori_create, unittypes_create, unittypes_list, unittypes_update, unittypes_delete, productcategories_create, productcategories_update, productcategories_list, productcategories_delete } from "../ApiURL";
import axios from "axios";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";
const ContextDataProvider = createContext()

const ContextDataApi = ({ children }) => {

  // =================================================================
  //                      Territory Context API Start
  // =================================================================
  const [hideModal, setHideModal] = useState(false);
  const [error, setError] = useState([]);

  // Create Territory
  const [terrritoriName, setTerritoryName] = useState("");
  const terrritoriHandleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!terrritoriName) {
        return setError("Territory Name is required...!!")
      }
      const response = await axios.post(terrritori_create, { name: terrritoriName }, {
        headers: { Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("Territory Added Successfully!")
        setHideModal(!hideModal);
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };



  // Update Territory
  const [updateTerritory, setUpdateTerritory] = useState({ id: "", name: "" });

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
      console.error(error);
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const { name } = updateTerritory
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setError("Territory Name is required...!!")
      }
      const response = await axios.put(`${terrritori_update}${updateTerritory.id}/`, updateTerritory, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Territory Updated Successfully!")
        setHideModal(!hideModal);
        // territory();
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
          // territory();
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };


  // =================================================================
  //                      Designation Context API Start
  // =================================================================

  // Create Designation
  const [designationsName, setDesignationsName] = useState("");

  const designationsHandleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!designationsName) {
        return setError("Designations Name is required...!!")
      }
      const response = await axios.post(designations_create, { name: designationsName }, {
        headers: { Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("Territory Added Successfully!")
        setHideModal(!hideModal);
        // designationsFetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update Designations
  const [updateDesignations, setUpdateDesignations] = useState({ id: "", name: "" });

  const designationsInputChange = (e) => {
    const { name, value } = e.target
    setUpdateDesignations({ ...updateDesignations, name: value });
  }

  const getDesignations = async (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${designations_list}${id}/`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setUpdateDesignations(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const UpdateDesignationsFrom = async (e) => {
    e.preventDefault();
    const { name } = updateDesignations
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setError("Designations Name is required...!!")
      }
      const response = await axios.put(`${designations_update}${updateDesignations.id}/`, updateDesignations, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Designations Updated Successfully!")
        setHideModal(!hideModal);
      }
    } catch (error) {
      console.error(error);
    }

  }


  // Delete Territory
  const deleteDesignations = (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Designations Your Designations will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Designations!',
      cancelButtonText: 'Keep Designations!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${designations_delete}${id}/`, {
            headers: { Authorization: `Bearer ${token.access}` }
          });
          Swal.fire('Deleted!', 'Territory will be deleted permanently!', 'success');
          // designationsFetch();
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };


  // =================================================================
  //                      Designation Context API Start
  // =================================================================

  // Create Designation
  const [unitTypeName, setUnitTypeName] = useState("");

  const unitTypeHandleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!unitTypeName) {
        return setError("UnitType Name is required...!!")
      }
      const response = await axios.post(unittypes_create, { name: unitTypeName }, {
        headers: { Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("UnitType Added Successfully!")
        setHideModal(!hideModal);
        // designationsFetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update Designations
  const [updateUnitType, setUpdateUnitType] = useState({ id: "", name: "" });

  const unittypeInputChange = (e) => {
    const { name, value } = e.target
    setUpdateUnitType({ ...updateUnitType, name: value });
  }

  const getUnitType = async (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${unittypes_list}${id}/`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setUpdateUnitType(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const UpdateUnitTypeFrom = async (e) => {
    e.preventDefault();
    const { name } = updateUnitType
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setError("UnitType Name is required...!!")
      }
      const response = await axios.put(`${unittypes_update}${updateUnitType.id}/`, updateUnitType, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Designations Updated Successfully!")
        setHideModal(!hideModal);
      }
    } catch (error) {
      console.error(error);
    }

  }


  // Delete Territory
  const deleteUnitType = (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete UnitType Your UnitType will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete UnitType!',
      cancelButtonText: 'Keep UnitType!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${unittypes_delete}${id}/`, {
            headers: { Authorization: `Bearer ${token.access}` }
          });
          Swal.fire('Deleted!', 'Territory will be deleted permanently!', 'success');
          // designationsFetch();
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };

  // =================================================================
  //                      Product Category Context API Start
  // =================================================================

  // Create Designation
  const [productCategoryName, setProductCategoryName] = useState("");

  const productCategoryHandleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!productCategoryName) {
        return setError("Product Category Name is required...!!")
      }
      const response = await axios.post(productcategories_create, { name: productCategoryName }, {
        headers: { Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("Product Category Added Successfully!")
        setHideModal(!hideModal);
        // designationsFetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update Designations
  const [updateProductCategory, setUpdateProductCategory] = useState({ id: "", name: "" });

  const productCategoryInputChange = (e) => {
    const { name, value } = e.target
    setUpdateProductCategory({ ...updateProductCategory, name: value });
  }

  const getProductCategory = async (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      const response = await axios.get(`${productcategories_list}${id}/`, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      setUpdateProductCategory(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const UpdateProductCategoryFrom = async (e) => {
    e.preventDefault();
    const { name } = updateProductCategory
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {
      if (!name) {
        return setError("Product Category Name is required...!!")
      }
      const response = await axios.put(`${productcategories_update}${updateProductCategory.id}/`, updateProductCategory, {
        headers: { Authorization: `Bearer ${token.access}` }
      });
      if (response && response.data) {
        toast.success("Product Category Updated Successfully!")
        setHideModal(!hideModal);
      }
    } catch (error) {
      console.error(error);
    }

  }


  // Delete Territory
  const deleteProductCategory = (id) => {
    const token = JSON.parse(localStorage.getItem('access_token'));
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Product Category Your Product Category will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Category!',
      cancelButtonText: 'Keep Category!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${productcategories_delete}${id}/`, {
            headers: { Authorization: `Bearer ${token.access}` }
          });
          Swal.fire('Deleted!', 'Product category will be deleted permanently!', 'success');
          // designationsFetch();
        } catch (error) {
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });

  };








  return (
    <ContextDataProvider.Provider value={
      {
        terrritoriHandleSubmit, terrritoriName, setTerritoryName, delete_terrritori, updateTerritory, inputChangeHandler, update_terrritori, submitForm, hideModal, error,

        designationsName, setDesignationsName, designationsHandleSubmit, updateDesignations, designationsInputChange, getDesignations, UpdateDesignationsFrom, deleteDesignations,

        unitTypeName, setUnitTypeName, unitTypeHandleSubmit, updateUnitType, unittypeInputChange, getUnitType, UpdateUnitTypeFrom, deleteUnitType,

        productCategoryName, setProductCategoryName, productCategoryHandleSubmit,
        updateProductCategory, productCategoryInputChange, getProductCategory, UpdateProductCategoryFrom, deleteProductCategory
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