import React, { useEffect, useState } from 'react'
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';

const ProductCategoryTable = () => {
  const { getProductCategory, deleteProductCategory, isLoadedProductCategory, productCategoryError, productCategoryList, totalRowsProductCategory, paginationComponentOptionsProductCategory, productCategoryHandlePageChange, } = useContextDataProvider();
  const generateSerialNumber = (index) => index + 1;
  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => generateSerialNumber(index),
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


  if (productCategoryError) {
    return <div>Error: {productCategoryError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={productCategoryList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsProductCategory}
          progressPending={isLoadedProductCategory}
          paginationTotalRows={totalRowsProductCategory}
          onChangePage={productCategoryHandlePageChange}
        >
        </DataTable >
      </>
    )
  }
}

export default ProductCategoryTable