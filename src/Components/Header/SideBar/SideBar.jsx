import { Link } from "react-router-dom"
import { GrHomeRounded, IoIosArrowDown } from "../../../Data/Icon"
import "./SideBar.css"
import { dashIcon1, dashIcon10, dashIcon11, dashIcon12, dashIcon13, dashIcon2, dashIcon3, dashIcon4, dashIcon5, dashIcon6, dashIcon7, dashIcon8, dashIcon9, logo } from "../../../Data/Images"
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
                <Link to={""} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <img src={dashIcon1} className="dropdown_list_icon" alt="" /> Dashboard</span>
                </Link>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <span className="dropdown_list_name">
                    <img src={dashIcon2} className="dropdown_list_icon" alt="" /> Account</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample">
                  <Link to={"/account-chart"} className="dropdown_link">Account Chart</Link>
                  <Link to={""} className="dropdown_link">Account Statement</Link>
                  <Link to={""} className="dropdown_link">Payment Method</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                  <span className="dropdown_list_name">
                    <img src={dashIcon3} className="dropdown_list_icon" alt="" /> Product</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample1">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  <span className="dropdown_list_name">
                    <img src={dashIcon4} className="dropdown_list_icon" alt="" /> Payment</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample2">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                  <span className="dropdown_list_name">
                    <img src={dashIcon5} className="dropdown_list_icon" alt="" /> Sale</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample4">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                  <span className="dropdown_list_name">
                    <img src={dashIcon6} className="dropdown_list_icon" alt="" /> Purchase</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample5">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                  <span className="dropdown_list_name">
                    <img src={dashIcon7} className="dropdown_list_icon" alt="" /> Transaction</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample6">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7">
                  <span className="dropdown_list_name">
                    <img src={dashIcon8} className="dropdown_list_icon" alt="" /> Supplier</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample7">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8">
                  <span className="dropdown_list_name">
                    <img src={dashIcon9} className="dropdown_list_icon" alt="" /> Currier service</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample8">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9">
                  <span className="dropdown_list_name">
                    <img src={dashIcon10} className="dropdown_list_icon" alt="" /> Stock</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample9">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample10">
                  <span className="dropdown_list_name">
                    <img src={dashIcon11} className="dropdown_list_icon" alt="" /> Tools</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample10">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample11">
                  <span className="dropdown_list_name">
                    <img src={dashIcon12} className="dropdown_list_icon" alt="" /> Reports</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample11">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a className="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample12">
                  <span className="dropdown_list_name">
                    <img src={dashIcon13} className="dropdown_list_icon" alt="" /> Limit</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div className="collapse" id="collapseExample12">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>



            </ul>

          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar