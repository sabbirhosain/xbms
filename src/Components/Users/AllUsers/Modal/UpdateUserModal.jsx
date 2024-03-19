import React from 'react'
import { useUserDataProvider } from '../../../../ContextApi/UsersContextApi'

const UpdateUserModal = () => {
  const { updateUser, userHandleImageChange, userInputChangeHandler, userSubmitForm, hideModal } = useUserDataProvider()
  return (
    <div>
      <div className={`modal fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_user" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Update User</h4>
              <form onSubmit={userSubmitForm}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" name='first_name' value={updateUser.first_name} onChange={userInputChangeHandler} className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" name='username' value={updateUser.username} onChange={userInputChangeHandler} className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="number" name='phone' value={updateUser.phone} onChange={userInputChangeHandler} className="form-control" required />
                    </div>

                    {/* <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" value={updateUser.password} onChange={userInputChangeHandler} className="form-control" placeholder="*****" required />
                    </div> */}

                    <div className="mb-3">
                      <input type="file" accept="image/*" onChange={userHandleImageChange} className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" name='last_name' value={updateUser.last_name} onChange={userInputChangeHandler} className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" name='email' value={updateUser.email} onChange={userInputChangeHandler} className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">User Type</label>
                      <select className="form-select" name='user_type' value={updateUser.user_type} onChange={userInputChangeHandler} aria-label="Default select example" required>
                        <option>Select User Type</option>
                        <option value="user">User</option>
                        <option value="area_manager">Area Manager</option>
                        <option value="mpo">MPO</option>
                        <option value="salesperson">Salesperson</option>
                        <option value="accountant">Accountant</option>
                        <option value="factory">factory </option>
                      </select>
                    </div>

                    {/* <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input type="password" value={updateUser.password} onChange={(event) => (event.target.value)} className="form-control" placeholder="******" required />
                      <small className="text-danger">{""}</small>
                    </div> */}

                    {/* <div className={updateUser.picture ? "" : "d-none"} style={{ maxWidth: "60px" }}>
                      <img src={updateUser.picture} className="img-fluid" alt="image" />
                    </div> */}

                  </div>
                </div>

                <div className="row align-items-end mt-3">
                  <div className="col-md-6">
                    <div><button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button></div>
                  </div>
                  <div className="col-md-6">
                    <div> <button type="submit" className='add_person_submit_btn'>Update User</button></div>
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

export default UpdateUserModal