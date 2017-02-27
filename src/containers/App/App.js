import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './styles.scss';

export class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    //TODO
  }

  componentWillReceiveProps(nextProps) {
  //TODO
  }

  render() {
    return (
      <div>
        <h1 className="header">My App</h1>
        <Link to="/help/ui">Guidelines</Link>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
};

export default connect(mapStateToProps)(App);
