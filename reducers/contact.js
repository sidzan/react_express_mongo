export default function contact (state = {}, action) {
  var new_state=$.extend(true,{},state);
  switch (action.type) {
    case "CONTACTS_LOADING":
      new_state.contact_loading=true;
      return new_state; 
    case "CONTACTS_LOADED":
      new_state.contact_loading=false;
      new_state.contacts=action.contacts;
      return new_state;
    default:
      return new_state;
    }
}