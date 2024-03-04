import { Link } from "react-router-dom"
import { FaRegSquarePlus, FaBars, PiUserCircleLight, SlArrowDown, BsPlusSquare, } from "../../../Data/Icon"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar_top">
        <div className="container">
          <div className="navbar_row">
            <button className="offcanvas_close_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FaBars className="offcanvas_bar_icon" /></button>

            <div className="d-flex align-items-center">
              <button className="new_company_btn d-none d-md-block">
                <FaRegSquarePlus className="company_btn_icon" /> New Company</button>

              <button className="d-md-none">
                <BsPlusSquare className="company_btn_icon" />
              </button>

              <button className="create_invoice_btn d-none d-md-block">Create Invoice</button>

              <div className="btn-group">
                <button type="button" className="user_dropdown dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                  <PiUserCircleLight className="user_dropdown_icon" />
                  <SlArrowDown className="user_dropdown_arrow_icon d-none d-md-block" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end mt-2">
                  <li><Link to={""} className="dropdown-item" type="button">Action</Link></li>
                  <li><Link to={""} className="dropdown-item" type="button">Another</Link></li>
                  <li><Link to={""} className="dropdown-item" type="button">Something</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar