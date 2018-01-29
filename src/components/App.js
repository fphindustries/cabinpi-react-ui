import React from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import Home from './home/HomePage';
import About from './about/AboutPage';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
