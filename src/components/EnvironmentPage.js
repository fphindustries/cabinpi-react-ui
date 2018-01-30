import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as sensorActions from '../actions/sensorActions';

class EnvironmentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      timer: null,
      counter: -1,
      environmentReadings: {interiorTemp: null, exteriorTemp: null, humidity: null, pressure: null, time: null}
    };
  }

  componentWillMount() {
    this.props.actions.getEnvironmentReadings();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({environmentReadings: Object.assign({}, nextProps.environmentReadings)});
  }

  render() {
    return (
      <div>
        <h1>Environment Page</h1>
        <p>{this.state.environmentReadings.interiorTemp}</p>
        <p>{this.state.environmentReadings.exteriorTemp}</p>
        <p>{this.state.environmentReadings.humidity}</p>
        <p>{this.state.environmentReadings.pressure}</p>
        <p>{this.state.environmentReadings.time}</p>

      </div>
    );
  }
}

EnvironmentPage.propTypes = {
  environmentReadings: PropTypes.shape({
    interiorTemp: PropTypes.number,
    exteriorTemp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number})
};

function mapStateToProps(state, ownProps) {
  return {
    environmentReadings: state.environmentReadings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sensorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentPage);
