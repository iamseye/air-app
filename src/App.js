import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './containers/home';
import Header from './containers/header';
import Footer from './containers/footer';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Route exact path="/" component={Home} />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
