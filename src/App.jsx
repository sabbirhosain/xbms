import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { Route, Routes } from "react-router-dom"
import { Login, Register, Dashboard, NotFound, AccountChart, AccountStatement, PaymentMethod, ProductList, ProductSection, ProductType, ServiceList, } from "./Pages/Pages.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* accounts */}
        <Route path="/account-chart" element={<AccountChart />} />
        <Route path="/account-statement" element={<AccountStatement />} />
        <Route path="/payment-method" element={<PaymentMethod />} />

        {/* products */}
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-section" element={<ProductSection />} />
        <Route path="/product-type" element={<ProductType />} />
        <Route path="/service-list" element={<ServiceList />} />






        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App