/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EnvironmentPage from './EnvironmentPage';
import AboutPage from './AboutPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/environment" activeStyle={activeStyle}>Environment</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/environment" component={EnvironmentPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
// import React from 'react';
// import {Route} from 'react-router';
// import {Link} from 'react-router-dom';
// import Home from './home/HomePage';
// import About from './about/AboutPage';
// import './app.css';

// class AppComponent extends React.Component {

//   render() {
//     return (
//       <div>
//         <header>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//         </header>
//         <main>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//         </main>
//       </div>
//     );
//   }
// }

// AppComponent.defaultProps = {
// };

// export default AppComponent;
