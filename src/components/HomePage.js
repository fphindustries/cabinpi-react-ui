import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as sensorActions from '../actions/sensorActions';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page ahax</h1>
        <p>{this.props.readings.interior}</p>
      </div>
    );
  }
}

HomePage.propTypes = {
  readings: PropTypes.shape({interior: PropTypes.number}).isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    readings: state.readings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sensorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
