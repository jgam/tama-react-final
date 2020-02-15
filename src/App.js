import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Component1 from './components/Component1';
import Tama from './pages/Tama';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <div>temporary component</div>}
          />
          <Route exact path='/1' component={() => <div>1</div>} />
          <Route exact path='/2' component={Tama} />
          <Route exact path='/3' component={Home} />
          <Route exact path='/4' component={Component1} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
