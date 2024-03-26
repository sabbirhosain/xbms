import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi'
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi'

const UpdateProductModal = () => {
  const { productCategoryList } = useContextDataProvider()
  const { hideModal, updateProduct, productInputChangeHandler, productHandleImageChange, productSubmitForm } = useInventoryDataProvider()
  return (
    <div className={`modal p-0 fade ${hideModal ? "show d-none" : " "}`} data-bs- id="update_product" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Update Product</h4>
            <form onSubmit={productSubmitForm}>
              <div className="row">
                <div className="col-md-6">

                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" name='name' value={updateProduct.name} onChange={productInputChangeHandler} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Production Unit Name</label>
                    <input type="text" name='production_unit_name' value={updateProduct.production_unit_name} onChange={productInputChangeHandler} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Product Category</label>
                    <select className="form-select" name="product_category" value={updateProduct.product_category} onChange={productInputChangeHandler} required>
                      <option>Select Unit Name</option>
                      {
                        productCategoryList.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                      }
                    </select>
                  </div>

                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Formula No</label>
                    {/* <select className="form-select" value={""} onChange={(event) => (event.target.value)} required>
                      <option>Select Unit Name</option>
                    </select> */}
                    <input type="text" name='formula_no' value={updateProduct.formula_no} onChange={productInputChangeHandler} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Quantity In Preparation Ratio</label>
                    <input type="text" name='quantity_in_preparation_ratio' value={updateProduct.quantity_in_preparation_ratio} onChange={productInputChangeHandler} className="form-control" placeholder="00.00" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Select Product image</label>
                    <input type="file" accept="image/*" onChange={productHandleImageChange} className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><button type="button" className="modal_close_btn" data-bs-dismiss="modal">Close</button></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Update Product</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProductModal