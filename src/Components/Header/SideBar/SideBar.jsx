import { Link } from "react-router-dom"
import { GrHomeRounded, IoIosArrowDown } from "../../../Data/Icon"
import "./SideBar.css"
import { logo } from "../../../Data/Images"
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
                    <GrHomeRounded className="dropdown_list_icon" /> Dashboard</span>
                </Link>
              </li>

              <li className="dropdown_list">
                <a class="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <span className="dropdown_list_name">
                    <GrHomeRounded className="dropdown_list_icon" /> Dashboard</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div class="collapse" id="collapseExample">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a class="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                  <span className="dropdown_list_name">
                    <GrHomeRounded className="dropdown_list_icon" /> Dashboard</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div class="collapse" id="collapseExample1">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a class="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  <span className="dropdown_list_name">
                    <GrHomeRounded className="dropdown_list_icon" /> Dashboard</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div class="collapse" id="collapseExample2">
                  <Link to={""} className="dropdown_link">Dropdown 1</Link>
                  <Link to={""} className="dropdown_link">Dropdown 2</Link>
                  <Link to={""} className="dropdown_link">Dropdown 3</Link>
                  <Link to={""} className="dropdown_link">Dropdown 4</Link>
                </div>
              </li>

              <li className="dropdown_list">
                <a class="dropdown_btn" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                  <span className="dropdown_list_name">
                    <GrHomeRounded className="dropdown_list_icon" /> Dashboard</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </a>

                <div class="collapse" id="collapseExample4">
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