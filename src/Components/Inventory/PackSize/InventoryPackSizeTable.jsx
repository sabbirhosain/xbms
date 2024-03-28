import React from 'react'
import DataTable from 'react-data-table-component';
import { edit, trash } from '../../../Data/Images';
import { useInventoryDataProvider } from '../../../ContextApi/InventoryContextApi';
import { Link } from 'react-router-dom';

const InventoryPackSizeTable = () => {
  const { packsizeError, isLoadedPacksize, packsizeList, totalRowsPacksize, paginationComponentOptionsPacksize, packsizeHandlePageChange,delete_packsize } = useInventoryDataProvider()
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Product",
      selector: row => row.product,
    },
    {
      name: "Pack Size",
      selector: row => row.pack_size,
    },
    {
      name: "Unit Name",
      selector: row => row.unit_name,
    },
    {
      name: "Pack Type",
      selector: row => row.pack_type,
    },
    {
      name: "Product Quantity Per Unit",
      selector: row => row.product_quantity_per_unit,
    },
    {
      name: "Opening Balance",
      selector: row => row.opening_balance,
    },
    {
      name: "Current Balance",
      selector: row => row.current_balance,
    },
    {
      name: "Recorder Level",
      selector: row => row.recorder_level,
    },
    {
      name: "Bonus Base Quantity",
      selector: row => row.bonus_base_quantity,
    },
    {
      name: "Bonus Rate Per Base Quantity",
      selector: row => row.bonus_rate_per_base_quantity,
    },
    {
      name: "Sample Rate",
      selector: row => row.sample_rate,
    },
    {
      name: "Costing Price",
      selector: row => row.costing_price,
    },
    {
      name: "Company Price",
      selector: row => row.company_price,
    },
    {
      name: "Distributor Price",
      selector: row => row.distributor_price,
    },
    {
      name: "MRP",
      selector: row => row.mrp,
    },
    {
      name: "Physician Sample",
      selector: row => row.is_physician_sample === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "5px" }}>No</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "5px" }}>Yes</button>
    },
    {
      name: "Action",
      cell: row => <>
        <Link to={`/update-inventory-pack-size/${row.id}`} className="me-2"> <img src={edit} /></Link>
        <button onClick={() => delete_packsize(row.id)}><img src={trash} /></button>
      </>

    }
  ];
  if (packsizeError) {
    return <div>Error: {packsizeError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={packsizeList}
          pagination
          paginationServer
          paginationComponentOptions={paginationComponentOptionsPacksize}
          progressPending={isLoadedPacksize}
          paginationTotalRows={totalRowsPacksize}
          onChangePage={packsizeHandlePageChange}
        />
      </>
    )
  }
}

export default InventoryPackSizeTable