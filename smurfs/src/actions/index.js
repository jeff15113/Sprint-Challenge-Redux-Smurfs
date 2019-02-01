import Axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const FETCH_SMURF_SUCCESSFUL = "FETCH_SMURF_SUCCESSFUL";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESSFUL = "ADD_SMURF_SUCCESSFUL";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const fetchsmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  Axios.get("http://192.168.1.246:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SMURF_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const addSmurf = newsmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  Axios.post(`http://192.168.1.246:3333/smurfs`, newsmurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }));
};
