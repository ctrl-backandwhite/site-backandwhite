import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";

// src/app/store/Cart/cart.action.ts
var fetchCartData = createAction("[Data] fetch Cart");
var fetchCartSuccess = createAction("[Data] fetch Cart success", props());
var fetchCartFail = createAction("[Data fetch Cart failed]", props());

// src/app/store/customer/customer.action.ts
var fetchCustomerData = createAction("[Data] fetch Customer");
var fetchCustomerSuccess = createAction("[Data] fetch Customer success", props());
var fetchCustomerFail = createAction("[Data fetch Customer failed]", props());
var addCustomerlist = createAction("[Data] Add Customerlist", props());
var addCustomerlistSuccess = createAction("[Data] Add Customerlist Success", props());
var addCustomerlistFailure = createAction("[Data] Add Customerlist Failure", props());
var updateCustomerlist = createAction("[Data] Update Customerlist", props());
var updateCustomerlistSuccess = createAction("[Data] Update Customerlist Success", props());
var updateCustomerlistFailure = createAction("[Data] Update Customerlist Failure", props());
var deleteCustomerlist = createAction("[Data] Delete Customerlist", props());
var deleteCustomerlistSuccess = createAction("[Data] Delete Customerlist Success", props());
var deleteCustomerlistFailure = createAction("[Data] Delete Customerlist Failure", props());

// src/app/store/orders/order.actions.ts
var fetchEcoorderDataData = createAction("[Data] fetch orderDatas");
var fetchEcoorderDataSuccess = createAction("[Data] fetch orderDatas success", props());
var fetchEcoorderDataFail = createAction("[Data fetch orderDatas failed]", props());
var addEcoOrders = createAction("[Data] Add Orders", props());
var addEcoOrdersSuccess = createAction("[Data] Add Orders Success", props());
var addEcoOrdersFailure = createAction("[Data] Add Orders Failure", props());
var updateEcoOrders = createAction("[Data] Update Orders", props());
var updateEcoOrdersSuccess = createAction("[Data] Update Orders Success", props());
var updateEcoOrdersFailure = createAction("[Data] Update Orders Failure", props());
var deleteEcoOrders = createAction("[Data] Delete Orders", props());
var deleteEcoOrdersSuccess = createAction("[Data] Delete Orders Success", props());
var deleteEcoOrdersFailure = createAction("[Data] Delete Orders Failure", props());

export {
  fetchCartData,
  fetchCartSuccess,
  fetchCartFail,
  fetchCustomerData,
  fetchCustomerSuccess,
  fetchCustomerFail,
  addCustomerlist,
  addCustomerlistSuccess,
  addCustomerlistFailure,
  updateCustomerlist,
  updateCustomerlistSuccess,
  updateCustomerlistFailure,
  fetchEcoorderDataData,
  fetchEcoorderDataSuccess,
  fetchEcoorderDataFail,
  addEcoOrders,
  addEcoOrdersSuccess,
  addEcoOrdersFailure,
  updateEcoOrders,
  updateEcoOrdersSuccess,
  updateEcoOrdersFailure,
  deleteEcoOrders,
  deleteEcoOrdersSuccess,
  deleteEcoOrdersFailure
};
//# sourceMappingURL=chunk-JJUXV4IW.js.map
