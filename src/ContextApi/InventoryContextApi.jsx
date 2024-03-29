import { createContext, useContext, useEffect, useState } from "react"
import { packsize_delete, packsize_list, product_delete, product_list, product_stock_in_list, product_stock_out_list, product_update, rawitem_stock_in_list, rawitem_stock_out_list, rawitems_delete, rawitems_list, rawitems_update } from "../ApiURL";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const InventoryContextDataProvider = createContext()
const InventoryContextApi = ({ children }) => {
  const [hideModal, setHideModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const handleUserCloseModal = () => { setShowUserModal(false) };
  const handleUserOpenModal = () => { setShowUserModal(true) };
  const token = JSON.parse(localStorage.getItem('access_token'));

  // All Raw items  List
  const [rawitemError, setRawitemError] = useState(null);
  const [isLoadedRawitem, setIsLoadedRawitem] = useState(false);
  const [rawitemList, setRawitemList] = useState([]);
  const [totalRowsSuppRawitem, setTotalRowsRawitem] = useState(0);
  const paginationComponentOptionsRawitem = { noRowsPerPage: true };
  const [rawitemSearchQuery, setRawitemSearchQuery] = useState("");
  useEffect(() => { rawitemFetch(1); }, [rawitemSearchQuery])

  const rawitemFetch = async (page) => {
    try {
      setIsLoadedRawitem(true);
      const response = await axios.get(`${rawitems_list}?search=${rawitemSearchQuery}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setRawitemList(response.data.results);
      setTotalRowsRawitem(response.data.count);
      setIsLoadedRawitem(false);
    } catch (error) {
      setIsLoadedRawitem(true);
      setRawitemError(error);
    }
  }
  const rawitemHandlePageChange = page => {
    rawitemFetch(page);
  };

  const handleRawitemSearchInputChange = (e) => {
    setRawitemSearchQuery(e.target.value);
  }

  // Update Rawitem
  const [updateRawitem, setUpdateRawitem] = useState({ id: "", name: "", unit_name: "", opening_balance: "", recorder_level: "" });

  const rawitemInputChange = (e) => {
    const { name, value } = e.target
    setUpdateRawitem({ ...updateRawitem, [name]: value });
  }

  const getRawitem = async (id) => {
    try {
      const response = await axios.get(`${rawitems_list}${id}/`)
      setUpdateRawitem(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const UpdateRawitemFrom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${rawitems_update}${updateRawitem.id}/`, updateRawitem,);
      if (response && response.data) {
        toast.success("Suppliers Updated Successfully!")
        setHideModal(!hideModal);
        rawitemFetch(1)
      }
    } catch (error) {
      console.error(error);
    }

  }


  // All Raw items Delete
  const delete_rawitem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Rawitem Your Rawitem will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Rawitem!',
      cancelButtonText: 'Keep Rawitem!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${rawitems_delete}${id}/`);
          Swal.fire('Deleted!', 'Rawitem will be deleted permanently!', 'success');
          rawitemFetch(1);
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };



  // All Raw items stock in List
  const [rawStockinError, setRawStockinError] = useState(null);
  const [isLoadedRawStockin, setIsLoadedRawStockin] = useState(false);
  const [rawStockinList, setRawStockinList] = useState([]);
  const [totalRowsSuppRawStockin, setTotalRowsRawStockin] = useState(0);
  const paginationComponentOptionsRawStockin = { noRowsPerPage: true };
  const [rawStockinSearchQuery, setRawStockinSearchQuery] = useState("");
  const [rawStockinFrom, setRawStockinFrom] = useState("");
  const [rawStockinTo, setRawStockinTo] = useState("");
  useEffect(() => { rawitemStockinFetch(1) }, [rawStockinSearchQuery, rawStockinFrom, rawStockinTo])

  const rawitemStockinFetch = async (page) => {
    try {
      setIsLoadedRawStockin(true);
      const response = await axios.get(`${rawitem_stock_in_list}?search=${rawStockinSearchQuery}&from_date=${rawStockinFrom}&to_date=${rawStockinTo}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setRawStockinList(response.data.results);
      setTotalRowsRawStockin(response.data.count);
      setIsLoadedRawStockin(false);
    } catch (error) {
      setIsLoadedRawStockin(true);
      setRawStockinError(error);
    }
  }

  const rawitemStockinHandlePageChange = page => {
    rawitemStockinFetch(page);
  };

  const handleStockinFromDateChange = (e) => {
    setRawStockinFrom(e.target.value);
  }
  const handleStockinToDateChange = (e) => {
    setRawStockinTo(e.target.value);
  }

  const handleRawitemStockinSearchInputChange = (e) => {
    setRawStockinSearchQuery(e.target.value);
  }

  // All Raw items stock out List
  const [rawStockoutError, setRawStockoutError] = useState(null);
  const [isLoadedRawStockout, setIsLoadedRawStockout] = useState(false);
  const [rawStockoutList, setRawStockoutList] = useState([]);
  const [totalRowsSuppRawStockout, setTotalRowsRawStockout] = useState(0);
  const paginationComponentOptionsRawStockout = { noRowsPerPage: true };
  const [rawStockoutSearchQuery, setRawStockoutSearchQuery] = useState("");
  const [rawStockoutFrom, setRawStockoutFrom] = useState("");
  const [rawStockoutTo, setRawStockoutTo] = useState("");
  useEffect(() => { rawitemStockoutFetch(1); }, [rawStockoutSearchQuery, rawStockoutFrom, rawStockoutTo])

  const rawitemStockoutFetch = async (page) => {
    try {
      setIsLoadedRawStockout(true);
      const response = await axios.get(`${rawitem_stock_out_list}?search=${rawStockoutSearchQuery}&from_date=${rawStockoutFrom}&to_date=${rawStockoutTo}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setRawStockoutList(response.data.results);
      setTotalRowsRawStockout(response.data.count);
      setIsLoadedRawStockout(false);
    } catch (error) {
      setIsLoadedRawStockout(true);
      setRawStockoutError(error);
    }
  }
  const rawitemStockoutHandlePageChange = page => {
    rawitemStockoutFetch(page);
  };

  const handleStockoutFromDateChange = (e) => {
    setRawStockoutFrom(e.target.value);
  }
  const handleStockoutToDateChange = (e) => {
    setRawStockoutTo(e.target.value);
  }

  const handleRawitemStockoutSearchInputChange = (e) => {
    setRawStockoutSearchQuery(e.target.value);
  }


  // All Product List
  const [productError, setProductError] = useState(null);
  const [isLoadedProduct, setIsLoadedProduct] = useState(false);
  const [productList, setProductList] = useState([]);
  const [totalRowsProduct, setTotalRowsProduct] = useState(0);
  const paginationComponentOptionsProduct = { noRowsPerPage: true };
  const [productSearchQuery, setProductSearchQuery] = useState("");
  useEffect(() => { productFetch(1); }, [productSearchQuery])

  const productFetch = async (page) => {
    try {
      setIsLoadedProduct(true);
      const response = await axios.get(`${product_list}?search=${productSearchQuery}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setProductList(response.data.results);
      setTotalRowsProduct(response.data.count);
      setIsLoadedProduct(false);
    } catch (error) {
      setIsLoadedProduct(true);
      setProductError(error);
    }
  }
  const productHandlePageChange = page => {
    productFetch(page);
  };

  const handleProductSearchInputChange = (e) => {
    setProductSearchQuery(e.target.value);
  }

  // Update Product
  const [updateProduct, setUpdateProduct] = useState({ name: "", formula_no: "", production_unit_name: "", quantity_in_preparation_ratio: "", product_category: "", image: null });

  const productInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateProduct({ ...updateProduct, [name]: value });
  };

  const productHandleImageChange = (e) => {
    setUpdateProduct({ ...updateProduct, image: e.target.files[0] });
  };

  const update_product = async (id) => {
    try {
      const response = await axios.get(`${product_list}${id}/`, { headers: { Authorization: `Bearer ${token.access}` } });
      setUpdateProduct(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const productSubmitForm = async (e) => {
    e.preventDefault();
    const { name, formula_no, production_unit_name, quantity_in_preparation_ratio, product_category, image } = updateProduct
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('formula_no', formula_no);
      formData.append('production_unit_name', production_unit_name);
      formData.append('quantity_in_preparation_ratio', quantity_in_preparation_ratio);
      formData.append('product_category', product_category);
      if (image) {
        formData.append('image', image);
      }
      const response = await axios.put(`${product_update}${updateProduct.id}/`, formData,);
      if (response && response.data) {
        toast.success("Product Updated Successfully!")
        setHideModal(!hideModal);
        productFetch(1);
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }

  }

  // Product Delete
  const delete_product = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Rawitem Your Rawitem will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Rawitem!',
      cancelButtonText: 'Keep Rawitem!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${product_delete}${id}/`);
          Swal.fire('Deleted!', 'Rawitem will be deleted permanently!', 'success');
          productFetch(1);
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    });
  };


  // All Product stock in List
  const [productStockinError, setProductStockinError] = useState(null);
  const [isLoadedProductStockin, setIsLoadedProductStockin] = useState(false);
  const [productStockinList, setProductStockinList] = useState([]);
  const [totalRowsSuppProductStockin, setTotalRowsProductStockin] = useState(0);
  const paginationComponentOptionsProductStockin = { noRowsPerPage: true };
  const [productStockinSearchQuery, setProductStockinSearchQuery] = useState("");
  const [productStockinFrom, setProductStockinFrom] = useState("");
  const [productStockinTo, setProductStockinTo] = useState("");

  useEffect(() => { productStockinFetch(1) }, [productStockinSearchQuery, productStockinFrom, productStockinTo])

  const productStockinFetch = async (page) => {
    try {
      setIsLoadedProductStockin(true);
      const response = await axios.get(`${product_stock_in_list}?search=${productStockinSearchQuery}&from_date=${productStockinFrom}&to_date=${productStockinTo}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setProductStockinList(response.data.results);
      setTotalRowsProductStockin(response.data.count);
      setIsLoadedProductStockin(false);
    } catch (error) {
      setIsLoadedProductStockin(true);
      setProductStockinError(error);
    }
  }

  const productStockinHandlePageChange = page => {
    productStockinFetch(page);
  };

  const handleProductStockinFromDateChange = (e) => {
    setProductStockinFrom(e.target.value);
  }
  const handleProductStockinToDateChange = (e) => {
    setProductStockinTo(e.target.value);
  }

  const handleProductStockinSearchInputChange = (e) => {
    setProductStockinSearchQuery(e.target.value);
  }

  // All Product stock out List
  const [productStockoutError, setProductStockoutError] = useState(null);
  const [isLoadedProductStockout, setIsLoadedProductStockout] = useState(false);
  const [productStockoutList, setProductStockoutList] = useState([]);
  const [totalRowsSuppProductStockout, setTotalRowsProductStockout] = useState(0);
  const paginationComponentOptionsProductStockout = { noRowsPerPage: true };
  const [productStockoutSearchQuery, setProductStockoutSearchQuery] = useState("");
  const [productStockoutFrom, setProductStockoutFrom] = useState("");
  const [productStockoutTo, setProductStockoutTo] = useState("");
  useEffect(() => { productStockoutFetch(1); }, [productStockoutSearchQuery, productStockoutFrom, productStockoutTo])

  const productStockoutFetch = async (page) => {
    try {
      setIsLoadedProductStockout(true);
      const response = await axios.get(`${product_stock_out_list}?search=${productStockoutSearchQuery}&from_date=${productStockoutFrom}&to_date=${productStockoutTo}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setProductStockoutList(response.data.results);
      setTotalRowsProductStockout(response.data.count);
      setIsLoadedProductStockout(false);
    } catch (error) {
      setIsLoadedProductStockout(true);
      setProductStockoutError(error);
    }
  }
  const productStockoutHandlePageChange = page => {
    productStockoutFetch(page);
  };

  const handleProductStockoutFromDateChange = (e) => {
    setProductStockoutFrom(e.target.value);
  }
  const handleProductStockoutToDateChange = (e) => {
    setProductStockoutTo(e.target.value);
  }

  const handleProductStockoutSearchInputChange = (e) => {
    setProductStockoutSearchQuery(e.target.value);
  }

  // All packsize List
  const [packsizeError, setPacksizeError] = useState(null);
  const [isLoadedPacksize, setIsLoadedPacksize] = useState(false);
  const [packsizeList, setPacksizeList] = useState([]);
  const [totalRowsPacksize, setTotalRowsPacksize] = useState(0);
  const paginationComponentOptionsPacksize = { noRowsPerPage: true };
  const [packsizeSearchQuery, setPacksizeSearchQuery] = useState("");
  useEffect(() => { packsizeFetch(1) }, [packsizeSearchQuery])

  const packsizeFetch = async (page) => {
    try {
      setIsLoadedPacksize(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${packsize_list}?search=${packsizeSearchQuery}&page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setPacksizeList(response.data.results);
      setTotalRowsPacksize(response.data.count);
      setIsLoadedPacksize(false);
    } catch (error) {
      setIsLoadedPacksize(true);
      setPacksizeError(error);
    }
  }
  const packsizeHandlePageChange = page => {
    packsizeFetch(page);
  };

  const handlePacksizeSearchInputChange = (e) => {
    setPacksizeSearchQuery(e.target.value);
  }

  // Packsize Delete
  const delete_packsize = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'By Clicking Delete Packsize Your Packsize will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete Packsize!',
      cancelButtonText: 'Keep Packsize!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${packsize_delete}${id}/`, { headers: { Authorization: `Bearer ${token.access}` } });
          Swal.fire('Deleted!', 'Packsize will be deleted permanently!', 'success');
          packsizeFetch(1);
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
    <InventoryContextDataProvider.Provider value={
      {
        // raw item
        rawitemFetch, rawitemList, rawitemError, isLoadedRawitem, totalRowsSuppRawitem, paginationComponentOptionsRawitem, rawitemHandlePageChange, handleRawitemSearchInputChange, hideModal, updateRawitem, rawitemInputChange, getRawitem, UpdateRawitemFrom, delete_rawitem,
        // raw item stock in
        rawitemStockinFetch, rawStockinError, isLoadedRawStockin, rawStockinList, totalRowsSuppRawStockin, paginationComponentOptionsRawStockin, rawitemStockinHandlePageChange, handleStockinFromDateChange, handleStockinToDateChange, handleRawitemStockinSearchInputChange,
        // raw item stock out
        rawitemStockoutFetch, rawStockoutError, isLoadedRawStockout, rawStockoutList, totalRowsSuppRawStockout, paginationComponentOptionsRawStockout, rawitemStockoutHandlePageChange, handleStockoutFromDateChange, handleStockoutToDateChange, handleRawitemStockoutSearchInputChange,
        // product
        productFetch, productError, isLoadedProduct, productList, totalRowsProduct, paginationComponentOptionsProduct, productHandlePageChange, handleProductSearchInputChange, delete_product, updateProduct, productInputChangeHandler, productHandleImageChange, update_product, productSubmitForm,
        // product stock in
        productStockinError, isLoadedProductStockin, productStockinList, totalRowsSuppProductStockin, paginationComponentOptionsProductStockin, productStockinHandlePageChange, handleProductStockinFromDateChange, handleProductStockinToDateChange, handleProductStockinSearchInputChange, productStockinFetch,
        // product stock out
        productStockoutError, isLoadedProductStockout, productStockoutList, totalRowsSuppProductStockout, paginationComponentOptionsProductStockout, productStockoutHandlePageChange, handleProductStockoutFromDateChange, handleProductStockoutToDateChange, handleProductStockoutSearchInputChange, productStockoutFetch,
        // packsize
        packsizeError, isLoadedPacksize, packsizeList, totalRowsPacksize, paginationComponentOptionsPacksize, packsizeHandlePageChange, handlePacksizeSearchInputChange, delete_packsize
      }
    }>
      {children}
    </InventoryContextDataProvider.Provider>
  )
}

export default InventoryContextApi
// coustom hooks
export const useInventoryDataProvider = () => {
  return useContext(InventoryContextDataProvider)
};