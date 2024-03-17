import React from 'react'
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'

const AddProductCategoryModal = () => {
  const { productCategoryName, setProductCategoryName, productCategoryHandleSubmit, error, showModal, handleCloseModal } = useContextDataProvider()
  return (
    <div>
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} data-bs- id="add_productCategory" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="modal_title">Setup Product Category</h4>
              <form onSubmit={productCategoryHandleSubmit}>
                <div className="mb-3">
                  <label htmlFor="add_territory" className="form-label">Name</label>
                  <input type="text" value={productCategoryName} onChange={(e) => setProductCategoryName(e.target.value)} className="form-control" id="add_territory" placeholder="Name" />
                  <small className="text-danger">{error}</small>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <button type="button" className="modal_close_btn" onClick={handleCloseModal}>Close</button>
                  <button type="submit" className="modal_add_btn">Add Category</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductCategoryModal