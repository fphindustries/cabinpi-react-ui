import * as types from './const';
import SensorApi from '../api/mockSensorApi';
// import AuthorApi from '../api/mockAuthorApi';
// import {beginAjaxCall} from './ajaxStatusActions';

export function getReadingsSuccess(readings) {
  return { type: types.GET_READINGS_SUCCESS, readings };
}

export function getReadings() {
  return function (dispatch) {
    return SensorApi.getCurrentReadings().then((readings) => {
      dispatch(getReadingsSuccess(readings));
    }).catch((error) => {
      throw (error);
    });
  };
}
