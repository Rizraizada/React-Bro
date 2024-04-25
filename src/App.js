import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavScrollExample from './components/NavScrollExample';
import ApiDemo from './pages/ApiDemo'; // Update the import path

function App() {
  return (
    <Router>
      <div>
        <NavScrollExample />
        <Switch>
          <Route path="/api-demo" component={ApiDemo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
