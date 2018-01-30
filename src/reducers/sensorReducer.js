import * as types from '../actions/const';
import initialState from './initialState';

export default function sensorReducer(state = initialState.readings, action) {
  switch (action.type) {
    case types.GET_READINGS_SUCCESS:
      return action.readings;
    default:
      return state;
  }
}
