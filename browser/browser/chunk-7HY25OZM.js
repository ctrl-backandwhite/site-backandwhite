import {
  createAction,
  props
} from "./chunk-S2XUSEFK.js";

// src/app/store/Job/job.action.ts
var fetchJoblistData = createAction("[Data] fetch Joblist");
var fetchJoblistSuccess = createAction("[Data] fetch Joblist success", props());
var fetchJoblistFail = createAction("[Data fetch Joblist failed]", props());
var fetchJobgridData = createAction("[Data] fetch Jobgrid");
var fetchJobgridSuccess = createAction("[Data] fetch Jobgrid success", props());
var fetchJobgridFail = createAction("[Data fetch Jobgrid failed]", props());
var fetchJobApplyData = createAction("[Data] fetch JobApply");
var fetchJobApplySuccess = createAction("[Data] fetch JobApply success", props());
var fetchJobApplyFail = createAction("[Data fetch JobApply failed]", props());
var addJoblist = createAction("[Data] Add Joblist", props());
var addJoblistSuccess = createAction("[Data] Add Joblist Success", props());
var addJoblistFailure = createAction("[Data] Add Joblist Failure", props());
var updateJoblist = createAction("[Data] Update Joblist", props());
var updateJoblistSuccess = createAction("[Data] Update Joblist Success", props());
var updateJoblistFailure = createAction("[Data] Update Joblist Failure", props());
var deleteJoblist = createAction("[Data] Delete Joblist", props());
var deleteJoblistSuccess = createAction("[Data] Delete Joblist Success", props());
var deleteJoblistFailure = createAction("[Data] Delete Joblist Failure", props());

// src/app/store/Candidate/candidate.actions.ts
var fetchCandidatelistData = createAction("[Data] fetch Candidatelist");
var fetchCandidatelistSuccess = createAction("[Data] fetch Candidatelist success", props());
var fetchCandidatelistFail = createAction("[Data fetch Candidatelist failed]", props());

export {
  fetchJoblistData,
  fetchJoblistSuccess,
  fetchJoblistFail,
  fetchJobgridData,
  fetchJobgridSuccess,
  fetchJobgridFail,
  fetchJobApplyData,
  fetchJobApplySuccess,
  fetchJobApplyFail,
  addJoblist,
  addJoblistSuccess,
  addJoblistFailure,
  updateJoblist,
  updateJoblistSuccess,
  updateJoblistFailure,
  fetchCandidatelistData,
  fetchCandidatelistSuccess,
  fetchCandidatelistFail
};
//# sourceMappingURL=chunk-7HY25OZM.js.map
