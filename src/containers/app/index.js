import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../home';
import List from '../list';
import Header from '../header';
import Footer from '../footer';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      <Footer />
    </div>
  </Router>
);

export default App;
