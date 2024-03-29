// authentication
import Login from "./Authentication/Login/Login"
import Register from "./Authentication/Register/Register"
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./NotFound/NotFound";
import Accounts from "./Accounts/Accounts";
// invoice
import CreateInvoice from "./Invoice/CreateInvoice";
import CreateSampleInvoice from "./Invoice/CreateSampleInvoice";
// setup
import Designation from "./Setup/Designation/Designation";
import ProductCategory from "./Setup/ProductCategory/ProductCategory";
import Territory from "./Setup/Territory/Territory";
import UnitType from "./Setup/UnitType/UnitType";
// products
import ProductList from "./Products/ProductList/ProductList";
import ProductSection from "./Products/ProductSection/ProductSection";
import ProductType from "./Products/ProductType/ProductType";
import ServiceList from "./Products/ServiceList/ServiceList";

// users
import AllUserList from "./Users/AllUsers/AllUserList";
import SalesPerson from "./Users/SalesPerson/SalesPerson";
import AddSalesPerson from "./Users/SalesPerson/AddSalesPerson";
import UpdateSalesPerson from "./Users/SalesPerson/UpdateSalesPerson";
import SuppliersList from "./Users/Suppliers/SuppliersList";

// Inventory
import AddInventoryPackSize from "./Inventory/PackSize/AddInventoryPackSize";
import UpdateInventoryPackSize from "./Inventory/PackSize/UpdateInventoryPackSize";
import InventoryPackSize from "./Inventory/PackSize/InventoryPackSize";
import InventoryRawItem from "./Inventory/RawItem/InventoryRawItem";
import InventoryStockIn from "./Inventory/RawItem/InventoryStockIn";
import InventoryStockOut from "./Inventory/RawItem/InventoryStockOut";
import InventoryProduct from "./Inventory/Product/InventoryProduct";
import ProductStockIn from "./Inventory/Product/ProductStockIn/ProductStockIn";
import ProductStockOut from "./Inventory/Product/ProductStockout/ProductStockOut";

export { Login, Register, Dashboard, CreateInvoice, Designation, ProductCategory, Territory, UnitType, NotFound, Accounts, ProductList, ProductSection, ProductType, ServiceList, AllUserList, SalesPerson, AddSalesPerson, UpdateSalesPerson, SuppliersList, InventoryRawItem, InventoryStockIn, InventoryStockOut, InventoryProduct, AddInventoryPackSize, UpdateInventoryPackSize, InventoryPackSize, ProductStockIn, ProductStockOut }