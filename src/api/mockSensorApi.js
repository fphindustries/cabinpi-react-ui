import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const readings = {
  interior: 68.2,
  exterior: 32.3
};

class SensorApi {
  static getCurrentReadings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, readings));
      }, delay);
    });
  }
}

export default SensorApi;
