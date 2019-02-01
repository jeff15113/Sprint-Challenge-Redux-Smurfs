/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESSFUL,
  FETCH_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESSFUL,
  ADD_SMURF_FAIL
} from "../actions";

const initialstate = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return { ...state, fetchingSmurfs: true, error: null };

    case FETCH_SMURF_SUCCESSFUL:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    case FETCH_SMURF_FAIL:
      return { ...state, fetchingSmurfs: false, error: action.payload };

    case ADD_SMURF_START:
      return { ...state, addingSmurf: true, error: null };

    case ADD_SMURF_SUCCESSFUL:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    case ADD_SMURF_FAIL:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    default:
      return state;
  }
};
