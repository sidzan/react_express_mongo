import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';
import timesheet from './timesheet';
import contact from './contact';
import base_user from './base_user'

export default combineReducers({
  todos,
  counter,
  contact,
  timesheet,
  base_user
})