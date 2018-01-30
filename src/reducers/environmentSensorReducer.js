import * as types from '../actions/const';
import initialState from './initialState';

export default function environmentSensorReducer(state = initialState.environmentReadings, action) {
  switch (action.type) {
    case types.GET_ENVIRONMENT_READINGS_SUCCESS:
      return action.environmentReadings;
    default:
      return state;
  }
}
