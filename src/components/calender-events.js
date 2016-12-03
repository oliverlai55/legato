import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CalenderEvents extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchCalendarData();
  }

  renderCalendarData() {

  }

  render() {
    return
      <div>
        <div>
          {this.renderCalendarData()}
        </div>
      </div>
  }
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, { })(CalenderEvents);
