import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";

// src/app/store/UserList/userlist.action.ts
var fetchuserlistData = createAction("[Data] fetch userlist");
var fetchuserlistSuccess = createAction("[Data] fetch userlist success", props());
var fetchuserlistFail = createAction("[Data fetch userlist failed]", props());
var adduserlist = createAction("[Data] Add userlist", props());
var adduserlistSuccess = createAction("[Data] Add userlist Success", props());
var adduserlistFailure = createAction("[Data] Add userlist Failure", props());
var updateuserlist = createAction("[Data] Update userlist", props());
var updateuserlistSuccess = createAction("[Data] Update userlist Success", props());
var updateuserlistFailure = createAction("[Data] Update userlist Failure", props());
var deleteuserlist = createAction("[Data] Delete userlist", props());
var deleteuserlistSuccess = createAction("[Data] Delete userlist Success", props());
var deleteuserlistFailure = createAction("[Data] Delete userlist Failure", props());

// src/app/store/UserGrid/user.action.ts
var fetchuserGridData = createAction("[Data] fetch userGrid");
var fetchuserGridSuccess = createAction("[Data] fetch userGrid success", props());
var fetchuserGridFail = createAction("[Data fetch userGrid failed]", props());

export {
  fetchuserlistData,
  fetchuserlistSuccess,
  fetchuserlistFail,
  adduserlist,
  adduserlistSuccess,
  adduserlistFailure,
  updateuserlist,
  updateuserlistSuccess,
  updateuserlistFailure,
  deleteuserlist,
  deleteuserlistSuccess,
  deleteuserlistFailure,
  fetchuserGridData,
  fetchuserGridSuccess,
  fetchuserGridFail
};
//# sourceMappingURL=chunk-4YV2U45U.js.map
