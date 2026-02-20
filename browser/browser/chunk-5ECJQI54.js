import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";

// src/app/store/Tasks/tasks.action.ts
var fetchtasklistData = createAction("[Data] fetch tasklist");
var fetchtasklistSuccess = createAction("[Data] fetch tasklist success", props());
var fetchtasklistFail = createAction("[Data fetch tasklist failed", props());
var addtasklist = createAction("[Data] Add tasklist", props());
var addtasklistSuccess = createAction("[Data] Add tasklist Success", props());
var addtasklistFailure = createAction("[Data] Add tasklist Failure", props());
var updatetasklist = createAction("[Data] Update tasklist", props());
var updatetasklistSuccess = createAction("[Data] Update tasklist Success", props());
var updatetasklistFailure = createAction("[Data] Update tasklist Failure", props());

export {
  fetchtasklistData,
  fetchtasklistSuccess,
  fetchtasklistFail,
  addtasklist,
  addtasklistSuccess,
  addtasklistFailure,
  updatetasklist,
  updatetasklistSuccess,
  updatetasklistFailure
};
//# sourceMappingURL=chunk-5ECJQI54.js.map
