import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../home';
import List from '../list';

const App = () => (
  <Router>
    <div className="App">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
      </main>
    </div>
  </Router>
);

export default App;
