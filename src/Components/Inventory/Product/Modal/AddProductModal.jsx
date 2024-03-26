import axios from "axios";
import { useUserDataProvider } from "../../../../ContextApi/UsersContextApi"
import { toast } from "react-toastify";
import { useState } from "react";
import { product_create } from "../../../../ApiURL";
import { useContextDataProvider } from "../../../../ContextApi/ContextDataApi";
import { useInventoryDataProvider } from "../../../../ContextApi/InventoryContextApi";

const AddProductModal = () => {
  const { showUserModal, handleUserCloseModal } = useUserDataProvider()
  const { productCategoryList } = useContextDataProvider()
  const { productFetch } = useInventoryDataProvider()

  const [productName, setProductName] = useState("");
  const [productionUnitName, setProductionUnitName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [formulaNo, setFormulaNo] = useState("");
  const [quantity, setQuantity] = useState("");
  const [picture, setPicture] = useState(null);
  const resetFields = () => { setProductName, setProductionUnitName, setProductCategory, setFormulaNo, setQuantity, setPicture(null); };


  const addProductHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('formula_no', formulaNo);
      formData.append('production_unit_name', productionUnitName);
      formData.append('quantity_in_preparation_ratio', quantity);
      formData.append('product_category', productCategory);
      if (picture) {
        formData.append('image', picture);
      }

      const response = await axios.post(product_create, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response && response.data) {
        toast.success("User Added Successfully!");
        resetFields();
        handleUserCloseModal();
        productFetch(1);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error("User Error..!!")
    }
  };

  return (
    <div className={`modal p-0 ${showUserModal ? "show d-block" : ""}`}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="modal_title">Add New Product</h4>
            <form onSubmit={addProductHandleSubmit}>
              <div className="row">
                <div className="col-md-6">

                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Production Unit Name</label>
                    <input type="text" value={productionUnitName} onChange={(event) => setProductionUnitName(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Product Category</label>
                    <select className="form-select" value={productCategory} onChange={(event) => setProductCategory(event.target.value)} required>
                      <option>Select Product Category</option>
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
                    <input type="text" value={formulaNo} onChange={(event) => setFormulaNo(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Quantity In Preparation Ratio</label>
                    <input type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="form-control" placeholder="00.00" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Select Product image</label>
                    <input type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row align-items-end mt-3">
                <div className="col-md-6">
                  <div><button type="button" className="modal_close_btn" onClick={handleUserCloseModal}>Close</button></div>
                </div>
                <div className="col-md-6">
                  <div> <button type="submit" className='add_person_submit_btn'>Add Rawitem</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductModal