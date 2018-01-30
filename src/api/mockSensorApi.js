import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const readings = {
  interior: 68.2,
  exterior: 32.3
};

const environmentReadings = {
  interiorTemp: 68.3,
  exteriorTemp: 32.4,
  humidity: 84,
  pressure: 30.07,
  time: new Date().getTime()
};

class SensorApi {
  static getCurrentReadings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, readings));
      }, delay);
    });
  }

  static getEnivronmentReadings() {
    return new Promise((resolve, reject) => {
      environmentReadings.time = new Date().getTime();
      setTimeout(() => {
        resolve(Object.assign({}, environmentReadings));
      }, delay);
    });
  }
}

export default SensorApi;
