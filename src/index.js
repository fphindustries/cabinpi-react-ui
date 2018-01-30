/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import { getReadings, getEnvironmentReadings } from './actions/sensorActions';
import * as types from './actions/const';

// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too!
// Webpack will run the associated loader and plug this into the page.
// require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
store.dispatch(getReadings());
setInterval(() => store.dispatch(getEnvironmentReadings()), 5000);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import {ConnectedRouter} from 'react-router-redux';
// import App from './containers/App';
// import configureStore, {history} from './stores';

// const store = configureStore();

// ReactDOM.render(
//   <AppContainer>
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <App />
//       </ConnectedRouter>
//     </Provider>
//   </AppContainer>,
//   document.getElementById('app')
// );

// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     const NextApp = require('./containers/App').default; // eslint-disable-line global-require

//     ReactDOM.render(
//       <AppContainer>
//         <Provider store={store}>
//           <ConnectedRouter history={history}>
//             <NextApp />
//           </ConnectedRouter>
//         </Provider>
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
