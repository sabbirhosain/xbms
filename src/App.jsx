import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"

import { Login, Register, Dashboard, NotFound, ProductList, ProductSection, ProductType, ServiceList, Accounts, Designation, ProductCategory, Territory, UnitType, AllUserList, AddSalesPerson, UpdateSalesPerson, SuppliersList, InventoryPackSize, InventoryProduct, InventoryRawItem, AddInventoryPackSize, UpdateInventoryPackSize, ProductStockIn, ProductStockOut, SalesPerson } from "./Pages/Pages.jsx";

import PrivateRoute from "./Routes/PrivateRoute.jsx";
import "./App.css"
import axios from "axios";

const App = () => {
  const token = JSON.parse(localStorage.getItem('access_token'));
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.access}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />

          {/* setup */}
          <Route path="/designation" element={<Designation />} />
          <Route path="/product-category" element={<ProductCategory />} />
          <Route path="/territory" element={<Territory />} />
          <Route path="/unit-type" element={<UnitType />} />

          {/* products */}
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-section" element={<ProductSection />} />
          <Route path="/product-type" element={<ProductType />} />
          <Route path="/service-list" element={<ServiceList />} />

          {/* users */}
          <Route path="/all-user-list" element={<AllUserList />} />
          <Route path="/sales-person" element={<SalesPerson />} />
          <Route path="/add-sales-person" element={<AddSalesPerson />} />
          <Route path="/update-sales-person/:id" element={<UpdateSalesPerson />} />
          <Route path="/suppliers-list" element={<SuppliersList />} />

          {/* Inventorys */}
          <Route path="/add-inventory-pack-size" element={<AddInventoryPackSize />} />
          <Route path="/update-inventory-pack-size" element={<UpdateInventoryPackSize />} />
          <Route path="/inventory-pack-size" element={<InventoryPackSize />} />
          <Route path="/inventory-product" element={<InventoryProduct />} />
          <Route path="/product-stock-in" element={<ProductStockIn />} />
          <Route path="/product-stock-out" element={<ProductStockOut />} />
          <Route path="/inventory-raw-item" element={<InventoryRawItem />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App