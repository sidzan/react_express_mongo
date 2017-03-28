export default function timesheet(state = {}, action) {
  console.log("reducer",state,action);
  var new_state=$.extend(true,{},state);
  switch (action.type) {
    case "TIMESHEET_LOADING":
      new_state.timesheet_loading=true;
      return new_state; 
    case "TIMESHEET_LOADED":
      new_state.timesheet_loading=false;
      new_state.timesheet=action.timesheet;
      return new_state;
    case "TOTAL_TIME_LOADING":
      new_state.total_time_loading=true;
      return new_state
    case "TOTAL_TIME_LOADED":
      new_state.total_time_loading=false;
      new_state.total_time=action.total_time;
      return new_state;
    default:
      return new_state;
    }
}