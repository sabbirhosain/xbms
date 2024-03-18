// authentication
import Login from "./Authentication/Login/Login"
import Register from "./Authentication/Register/Register"
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./NotFound/NotFound";
import Accounts from "./Accounts/Accounts";
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
import AddSalesPerson from "./Users/SalesPerson/AddSalesPerson";
import UpdateSalesPerson from "./Users/SalesPerson/UpdateSalesPerson";
import SuppliersList from "./Users/Suppliers/SuppliersList";

// Inventory
import AddInventoryPackSize from "./Inventory/PackSize/AddInventoryPackSize";
import UpdateInventoryPackSize from "./Inventory/PackSize/UpdateInventoryPackSize";
import InventoryPackSize from "./Inventory/PackSize/InventoryPackSize";
import InventoryRawItem from "./Inventory/RawItem/InventoryRawItem";
import InventoryProduct from "./Inventory/Product/InventoryProduct";
import ProductStockIn from "./Inventory/Product/ProductStockIn/ProductStockIn";
import ProductStockOut from "./Inventory/Product/ProductStockout/ProductStockOut";

export { Login, Register, Dashboard, Designation, ProductCategory, Territory, UnitType, NotFound, Accounts, ProductList, ProductSection, ProductType, ServiceList, AllUserList, AddSalesPerson, UpdateSalesPerson, SuppliersList, InventoryRawItem, InventoryProduct, AddInventoryPackSize, UpdateInventoryPackSize, InventoryPackSize, ProductStockIn, ProductStockOut }