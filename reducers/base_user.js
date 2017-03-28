export default function contact (state = {}, action) {
  var new_state=$.extend(true,{},state);
  switch (action.type) {
    case "BASE_USER_LOADING":
      new_state.base_user_loading=true;
      return new_state; 
    case "BASE_USER_LOADED":
      new_state.base_user_loading=false;
      new_state.base_user=action.base_user;
      return new_state;
    default:
      return new_state;
    }
}