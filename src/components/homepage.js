import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection } from '../actions/index';

import { Link } from 'react-router';

export default class HomePage extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div>
        <div className="container">
          <img src="../../img/legato-logo.png"/>
          <h1></h1>
        </div>
      </div>
    )
  }


}
