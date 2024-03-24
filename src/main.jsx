import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextApi from './ContextApi/ContextApi.jsx'
import ContextDataApi from './ContextApi/ContextDataApi.jsx'
import UsersContextApi from './ContextApi/UsersContextApi.jsx'
import InventoryContextApi from './ContextApi/InventoryContextApi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextApi>
      <ContextDataApi>
        <UsersContextApi>
          <InventoryContextApi>
            <App />
          </InventoryContextApi>
        </UsersContextApi>
      </ContextDataApi>
    </ContextApi>
  </BrowserRouter>
)
