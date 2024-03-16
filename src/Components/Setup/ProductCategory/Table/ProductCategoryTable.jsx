import React, { useEffect, useState } from 'react'
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import axios from 'axios';
import { productcategories_list } from '../../../../ApiURL';

const ProductCategoryTable = () => {
  const { getProductCategory, deleteProductCategory } = useContextDataProvider();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productCategoryList, setProductCategoryList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const paginationComponentOptions = { noRowsPerPage: true };
  useEffect(() => { productCategoryListFetch(1) }, [])


  const productCategoryListFetch = async (page) => {
    try {
      setIsLoaded(true);
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(`${productcategories_list}?page=${page}`, { headers: { Authorization: `Bearer ${token.access}` } });
      setProductCategoryList(response.data.results);
      setTotalRows(response.data.count);
      setIsLoaded(false);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }


  const handlePageChange = page => {
    productCategoryListFetch(page);
  };

  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Category Name",
      selector: row => row.name,
      width: "800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_productCategory" onClick={() => getProductCategory(row.id)}> <img src={edit} /></button>
        <button onClick={() => deleteProductCategory(row.id)}><img src={trash} /></button>
      </>

    }
  ];


  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={productCategoryList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptions}
          progressPending={isLoaded}
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
        >
        </DataTable >
      </>
    )
  }
}

export default ProductCategoryTable