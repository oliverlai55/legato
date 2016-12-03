import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCalendarData } from '..actions/index';

class CalenderEvents extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchCalendarData();
  }

  renderCalendarData() {
    if (this.props.musicData) {
      return this.props.musicData
    }
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
  return { musicData: state.musicData.all };
}

export default connect(mapStateToProps, { fetchCalendarData })(CalenderEvents);
