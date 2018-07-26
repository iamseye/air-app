import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../home';
import List from '../list';
import Header from '../header';
import Footer from '../footer';
import Detail from '../detail';
import Pay from '../pay';
import EmailVerifyCompleted from '../completed/emailVerify';
import './style.css';
import * as authActions from '../../actions/authActions';


class App extends Component {
  state = {}

  componentDidMount() {
    if (localStorage.getItem('USER_TOKEN')) {
      this.props.authActions.setLogined();
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/detail/:sellCarId" component={Detail} />
          <Route exact path="/pay/:sellCarId" component={Pay} />
          <Route exact path="/emailVerifyCompleted" component={EmailVerifyCompleted} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
