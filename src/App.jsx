import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"

import { Login, Register, Dashboard, NotFound, AccountChart, AccountStatement, PaymentMethod, ProductList, ProductSection, ProductType, ServiceList, User } from "./Pages/Pages.jsx";
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

          {/* accounts */}
          <Route path="/account-chart" element={<AccountChart />} />
          <Route path="/account-statement" element={<AccountStatement />} />
          <Route path="/payment-method" element={<PaymentMethod />} />

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