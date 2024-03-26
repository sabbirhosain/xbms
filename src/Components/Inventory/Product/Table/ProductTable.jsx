import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../../Data/Images';
import { useInventoryDataProvider } from '../../../../ContextApi/InventoryContextApi';

const ProductTable = () => {
  const { productError, isLoadedProduct, productList, totalRowsProduct, paginationComponentOptionsProduct, productHandlePageChange, delete_product, update_product } = useInventoryDataProvider()
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Product Name",
      selector: row => row.name,
    },
    {
      name: "Product image",
      selector: row => <img src={row.image} width={"40px"} />
    },
    {
      name: "Formula No",
      selector: row => row.formula_no,
    },
    {
      name: "Production Unit Name",
      selector: row => row.production_unit_name,
    },
    {
      name: "Quantity in preparation ratio",
      selector: row => row.quantity_in_preparation_ratio,
    },
    {
      name: "Product Category",
      selector: row => row.product_category,
    },

    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_product" onClick={() => update_product(row.id)}> <img src={edit} /></button>
        <button onClick={() => delete_product(row.id)}><img src={trash} /></button>
      </>

    }
  ];


  if (productError) {
    return <div>Error: {productError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={productList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsProduct}
          progressPending={isLoadedProduct}
          paginationTotalRows={totalRowsProduct}
          onChangePage={productHandlePageChange}
        />
      </>
    )
  }
}

export default ProductTable