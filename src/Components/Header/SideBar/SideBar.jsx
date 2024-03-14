import { Link, NavLink } from "react-router-dom"
import { IoIosArrowDown } from "../../../Data/Icon"
import "./SideBar.css"
import { dashIcon1, dashIcon10, dashIcon11, dashIcon12, dashIcon13, dashIcon14, dashIcon15, dashIcon16, dashIcon2, dashIcon3, dashIcon4, dashIcon5, dashIcon6, dashIcon7, dashIcon8, dashIcon9, logo } from "../../../Data/Images"
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="offcanvas offcanvas-start offcanvas_sidebar" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <Link to={"/"} className="text-center"><img src={logo} className="offcanvas_logo" alt="" /></Link>
            <button type="button" className="btn-close offcanvas_close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

            <ul className="dropdown_item">

              <li className="dropdown_list">
                <NavLink to={"/"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <img src={dashIcon1} className="dropdown_list_icon" alt="" /> Dashboard</span>
                </NavLink>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/accounts"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <img src={dashIcon2} className="dropdown_list_icon" alt="" /> Account</span>
                </NavLink>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/territory"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <img src={dashIcon14} className="dropdown_list_icon" alt="" />Setup</span>
                </NavLink>
              </li>


              <div className="accordion accordion-flush" id="accordionFlushExample">
                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseuser" aria-expanded="false" aria-controls="flush-collapseuser">
                    <span className="dropdown_list_name">
                      <img src={dashIcon15} className="dropdown_list_icon" alt="" /> Users</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapseuser" className="accordion-collapse collapse" aria-labelledby="flush-headinguser" data-bs-parent="#accordionFlushExample">
                    <NavLink to={"/sales-person-list"} className="dropdown_link">All User</NavLink>
                    <NavLink to={"/add-sales-person"} className="dropdown_link">Sales Person</NavLink>
                    <NavLink to={"/suppliers-list"} className="dropdown_link">Suppliers</NavLink>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseInventory" aria-expanded="false" aria-controls="flush-collapseInventory">
                    <span className="dropdown_list_name">
                      <img src={dashIcon16} className="dropdown_list_icon" alt="" />Inventory</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapseInventory" className="accordion-collapse collapse" aria-labelledby="flush-headingInventory" data-bs-parent="#accordionFlushExample">
                    <Link to={"/inventory-raw-item"} className="dropdown_link">Raw item</Link>
                    <Link to={"/inventory-product"} className="dropdown_link">Product</Link>
                    <Link to={"/inventory-pack-size"} className="dropdown_link">Pack size</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseProduct" aria-expanded="false" aria-controls="flush-collapseProduct">
                    <span className="dropdown_list_name">
                      <img src={dashIcon3} className="dropdown_list_icon" alt="" /> Product</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapseProduct" className="accordion-collapse collapse" aria-labelledby="flush-headingProduct" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment" aria-expanded="false" aria-controls="flush-collapsePayment">
                    <span className="dropdown_list_name">
                      <img src={dashIcon4} className="dropdown_list_icon" alt="" /> Payment</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesale" aria-expanded="false" aria-controls="flush-collapsesale">
                    <span className="dropdown_list_name">
                      <img src={dashIcon5} className="dropdown_list_icon" alt="" /> Sale</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsesale" className="accordion-collapse collapse" aria-labelledby="flush-headingsale" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment1" aria-expanded="false" aria-controls="flush-collapsePayment1">
                    <span className="dropdown_list_name">
                      <img src={dashIcon6} className="dropdown_list_icon" alt="" /> Purchase</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment1" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment1" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment2" aria-expanded="false" aria-controls="flush-collapsePayment2">
                    <span className="dropdown_list_name">
                      <img src={dashIcon7} className="dropdown_list_icon" alt="" /> Transaction</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment2" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment2" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment3" aria-expanded="false" aria-controls="flush-collapsePayment3">
                    <span className="dropdown_list_name">
                      <img src={dashIcon8} className="dropdown_list_icon" alt="" /> Supplier</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment3" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment3" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment4" aria-expanded="false" aria-controls="flush-collapsePayment4">
                    <span className="dropdown_list_name">
                      <img src={dashIcon9} className="dropdown_list_icon" alt="" /> Currier service</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment4" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment4" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment5" aria-expanded="false" aria-controls="flush-collapsePayment5">
                    <span className="dropdown_list_name">
                      <img src={dashIcon10} className="dropdown_list_icon" alt="" /> Stock</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment5" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment5" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment6" aria-expanded="false" aria-controls="flush-collapsePayment6">
                    <span className="dropdown_list_name">
                      <img src={dashIcon11} className="dropdown_list_icon" alt="" /> Tools</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment6" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment6" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment7" aria-expanded="false" aria-controls="flush-collapsePayment7">
                    <span className="dropdown_list_name">
                      <img src={dashIcon12} className="dropdown_list_icon" alt="" /> Reports</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment7" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment7" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>

                <li className="dropdown_list">
                  <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment8" aria-expanded="false" aria-controls="flush-collapsePayment8">
                    <span className="dropdown_list_name">
                      <img src={dashIcon13} className="dropdown_list_icon" alt="" /> Limit</span>
                    <IoIosArrowDown className="dropdown_icon" />
                  </button>

                  <div id="flush-collapsePayment8" className="accordion-collapse collapse" aria-labelledby="flush-headingPayment8" data-bs-parent="#accordionFlushExample">
                    <Link to={""} className="dropdown_link">Dropdown 1</Link>
                    <Link to={""} className="dropdown_link">Dropdown 2</Link>
                    <Link to={""} className="dropdown_link">Dropdown 3</Link>
                    <Link to={""} className="dropdown_link">Dropdown 4</Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default SideBar