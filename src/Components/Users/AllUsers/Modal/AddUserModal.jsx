import { useState } from "react";
import { useUserDataProvider } from "../../../../ContextApi/UsersContextApi"
import axios from "axios";
import { toast } from "react-toastify";
import { user_create } from "../../../../ApiURL";

const AddUserModal = () => {
  const { allUserFetch, showUserModal, handleUserCloseModal,} = useUserDataProvider()

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("")
  const [userType, setUserType] = useState("");
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState(null);


  const resetFields = () => { setUsername(""); setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setUserType(""); setPassword(""); setConfirmPassword(""); setPasswordError(""); setPicture(null); setError(null); };


  const addUserHandleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('access_token'));
    try {

      if (password !== confirmPassword) {
        return setPasswordError('Confirm Password do not match...!!');
      }

      const formData = new FormData();
      formData.append('username', username);
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('user_type', userType);
      formData.append('password', password);
      if (picture) {
        formData.append('picture', picture);
      }

      const response = await axios.post(user_create, formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token.access}` }
      });

      if (response && response.data) {
        toast.success("User Added Successfully!");
        resetFields();
        handleUserCloseModal();
        allUserFetch(1);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error("User Error..!!")
    }
  };



  return (
    <div>
      <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`} data-bs- id="add_user" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Add New User</h4>
              <form onSubmit={addUserHandleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="form-control" placeholder="sabbir" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="form-control" placeholder="sabbir47" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} className="form-control" placeholder="+880 123 456 7890" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="*****" required />
                    </div>

                    <div className="mb-3">
                      <input type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} className="form-control" placeholder="hosain" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="sabbir@gmail.com" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">User Type</label>
                      <select className="form-select" value={userType} onChange={(event) => setUserType(event.target.value)} aria-label="Default select example" required>
                        <option>Select User Type</option>
                        <option value="user">User</option>
                        <option value="area_manager">Area Manager</option>
                        <option value="mpo">MPO</option>
                        <option value="salesperson">Salesperson</option>
                        <option value="accountant">Accountant</option>
                        <option value="factory">factory </option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="form-control" placeholder="******" required />
                      <small className="text-danger">{passwordError}</small>
                    </div>

                    <div className={picture ? "" : "d-none"} style={{ maxWidth: "60px" }}>
                      <img src={picture ? URL.createObjectURL(picture) : ""} className="img-fluid" alt="image" />
                    </div>

                  </div>
                </div>

                <div className="row align-items-end mt-3">
                  <div className="col-md-6">
                    <div><button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button></div>
                  </div>
                  <div className="col-md-6">
                    <div> <button type="submit" className='add_person_submit_btn'>Add User</button></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUserModal