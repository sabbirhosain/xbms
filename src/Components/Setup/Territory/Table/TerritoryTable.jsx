import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import UpdateTerritoryModal from '../Modal/UpdateTerritoryModal copy';
import { useContextProvider } from '../../../../ContextApi/ContextApi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { terrritori_list } from '../../../../ApiURL';




const TerritoryTable = () => {
  const { territoryData, delete_terrritori, update_terrritori, } = useContextDataProvider();


  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Territory Name",
      selector: row => row.name,
      width: "800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_territory" onClick={() => update_terrritori(row.id)}> <img src={edit} /></button>
        <button onClick={() => delete_terrritori(row.id)}><img src={trash} /></button>
      </>

    }
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={territoryData}
        pagination
      >

      </DataTable>

      {/* <nav>
        <ul className="pagination">
          <li className={`page-item ${prevPage ? '' : 'disabled'}`}>
            <button className="page-link" onClick={handlePrevPage} disabled={!prevPage}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">{currentPage}</span>
          </li>
          <li className={`page-item ${nextPage ? '' : 'disabled'}`}>
            <button className="page-link" onClick={handleNextPage} disabled={!nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav> */}

      <UpdateTerritoryModal />
    </>
  )
}

export default TerritoryTable