import { FaBars } from "../../../Data/Icon"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar_top">
        <div className="container">
          <div className="navbar_row">
            <button class="btn btn-primary offcanvas_close_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><FaBars /></button>
            <div>Navbar</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar