import { useContextDataProvider } from '../../../../ContextApi/ContextDataApi';
import { edit, trash } from '../../../../Data/Images';
import DataTable from 'react-data-table-component';
import UpdateTerritoryModal from '../Modal/UpdateTerritoryModal copy';
const TerritoryTable = () => {
  const { territoryData, searchFilter, delete_terrritori, update_terrritori, nextPage, prevPage, currentPage, handleNextPage, handlePrevPage, } = useContextDataProvider();



  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "Territory Name",
      selector: row => row.name,
      width:"800px"
    },
    {
      name: "Action",
      cell: row => <>
        <button className="me-2" data-bs-toggle="modal" data-bs-target="#update_territory" onClick={() => update_terrritori(row.id)}> <img src={edit} /></button>
        <button className="" onClick={() => delete_terrritori(row.id)}><img src={trash} /></button>
      </>

    }
  ];


  return (
    <>
      <DataTable columns={columns} data={searchFilter} pagination></DataTable>

      <nav>
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
      </nav>

      <UpdateTerritoryModal />
    </>
  )
}

export default TerritoryTable