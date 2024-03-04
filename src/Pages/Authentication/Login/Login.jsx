import { Link, useNavigate } from "react-router-dom"
import { FaRegEye, FaRegEyeSlash, RiLockPasswordLine } from "../../../Data/Icon"
import { loginImg, loginImg3, logo } from "../../../Data/Images"
import { useContextProvider } from "../../../ContextApi/ContextApi"
import "./Login.css"
import "./Login.responsive.css"
import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';


const Login = () => {
  const { showPassword, passwordShowToggle, accessToken, setAccessToken, refreshToken, setRefreshToken, } = useContextProvider();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!username || !password) {
        return setError("username and password is required...!!")
      }

      const response = await axios.post('https://xms-esxe.onrender.com/api/auth/login/', {
        username: username,
        password: password,
      });

      if (response && response.data.user) {
        toast.success("Login Successfully!")

        setAccessToken({
          ...accessToken,
          user_name: response.data.user,
          accessToken: response.data.access
        })
        localStorage.setItem("access_token", JSON.stringify(response.data))

        setRefreshToken({
          ...refreshToken,
          user_name: response.data.user,
          accessToken: response.data.refresh
        })
        localStorage.setItem("refresh_token", JSON.stringify(response.data))

        navigate("/")
      }

    } catch (error) {
      setError("user and password invalid...!!")
      // toast.error("Login Faild !")
      console.error("Error", error);
    }
  };



  return (
    <>
      <section className="login_section container-fluid">
        <div className="row">
          <div className="col-md-6 g-0">
            <div className="login_left_side">
              <div className="login_left_text_box">
                <div className="login_left_text_logo">
                  <img src={logo} className="login_left_logo" alt="site_logo" />
                  <h2 className="login_text_title">Make Your business easier with Xmbl Plus</h2>
                </div>
                <div className="d-none d-md-block"><img src={loginImg} className="login_left_img" alt="login_img" /></div>
                <div className="d-md-none"><img src={loginImg3} className="login_left_img" alt="login_img" /></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="login_right_side">
              <form action="" onSubmit={formSubmit} className="login_form_box" method="post">
                <h2 className="login_title">Login</h2>
                <div className="">
                  <label htmlFor="user_name" className="form-label">User Name</label>

                  <input type="text"
                    // name="username"
                    // value={user.username}
                    // onChange={inputValue}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control" id="user_name" placeholder="Sabbir47" />
                </div>

                <div className="position-relative mb-md-3">
                  <label htmlFor="password" className="form-label">Password</label>

                  <input
                    type={showPassword ? "text" : "password"}
                    // name="password"
                    // value={user.password}
                    // onChange={inputValue}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control px-5" id="password" />

                  <span className="lock_icon"><RiLockPasswordLine /></span>

                  <button
                    type="button"
                    onClick={passwordShowToggle}
                    className="eye_icon">{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>

                  <small className="text-danger position-absolute">{error}</small>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-2 pt-md-0">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="remember_password" />
                    <label className="form-check-label" htmlFor="remember_password">Remember Password</label>
                  </div>
                  <Link to={"/"} className="form-check-label">Forget Password</Link>
                </div>

                <button type="submit" className="login_btn">Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login