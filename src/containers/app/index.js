import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../home';

const App = () => (
  <Router>
    <div className="App">
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  </Router>
);

export default App;
