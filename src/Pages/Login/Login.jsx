import { Link } from "react-router-dom"
import { FaRegEye, FaRegEyeSlash, RiLockPasswordLine } from "../../Data/Icon"
import { loginImg, logo } from "../../Data/Images"
import Layout from "../../Layout/Layout"
import { useContextProvider } from "../../ContextApi/ContextApi"
import "./Login.css"
import "./Login.responsive.css"

const Login = () => {
  const { showPassword, passwordShowToggle, user, inputValue, formSubmit } = useContextProvider()

  return (
    <Layout title={"Login"}>
      <section className="login_section container-fluid">
        <div className="row">
          <div className="col-md-6 g-0">
            <div className="login_left_side">
              <div className="login_left_text_box">
                <img src={logo} className="login_left_logo" alt="site_logo" />
                <h2 className="login_text_title">Make Your business easier with Xmbl Plus</h2>
                <div className=""><img src={loginImg} className="login_left_img" alt="login_img" /></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="login_right_side">
              <form action="" onSubmit={formSubmit} className="login_form_box" method="post">
                <h2 className="login_title d-none d-sm-block">Login</h2>
                <div className="text-center d-sm-none pb-3 pb-sm-0">
                  <img src={logo} className="" alt="site_logo" /></div>
                <div className="">
                  <label htmlFor="user_name" className="form-label">User Name</label>

                  <input type="text"
                    name="userName"
                    value={user.userName}
                    onChange={inputValue}
                    className="form-control" id="user_name" placeholder="Sabbir47" />
                </div>

                <div className="position-relative mb-md-3">
                  <label htmlFor="password" className="form-label">Password</label>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="userPassword"
                    value={user.userPassword}
                    onChange={inputValue}
                    className="form-control px-5" id="password" />

                  <span className="lock_icon"><RiLockPasswordLine /></span>

                  <button
                    type="button"
                    onClick={passwordShowToggle}
                    className="eye_icon">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>

                  {/* <small className="text-danger position-absolute">invalid user and password</small> */}
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="remember_password" />
                    <label className="form-check-label" htmlFor="remember_password">Remember Password</label>
                  </div>
                  <Link to={"/"} className="form-check-label">Forget Password</Link>
                </div>

                <button className="login_btn">Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Login