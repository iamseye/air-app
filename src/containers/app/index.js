import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../home';
import List from '../list';
import Header from '../header';
import Footer from '../footer';
import Detail from '../detail';
import Pay from '../pay';
import './style.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      <Route exact path="/detail/:sellCarId" component={Detail} />
      <Route exact path="/pay" component={Pay} />
      <Footer />
    </div>
  </Router>
);

export default App;
