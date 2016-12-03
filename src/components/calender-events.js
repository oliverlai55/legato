import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CalenderEvents extends Component {
  constructor() {
    super();

  }

  componentDidMount() {

  }

  render() {
    return
      <div>
      </div>
  }
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, { })(CalenderEvents);
