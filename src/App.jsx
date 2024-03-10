import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"

import { Login, Register, Dashboard, NotFound, ProductList, ProductSection, ProductType, ServiceList, User, Accounts, Designation, ProductCategory, Territory, UnitType } from "./Pages/Pages.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/product-category" element={<ProductCategory />} />
          <Route path="/territory" element={<Territory />} />
          <Route path="/unit-type" element={<UnitType />} />

          {/* products */}
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-section" element={<ProductSection />} />
          <Route path="/product-type" element={<ProductType />} />
          <Route path="/service-list" element={<ServiceList />} />

          <Route path="/user" element={<User />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App