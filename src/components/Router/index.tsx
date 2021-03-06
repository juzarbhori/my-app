

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomeScreen from '../Main/index';

class CustomRouter extends React.Component<any, {}> {    
  render() {
      return (
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </Router>
      );
    }
}

export default CustomRouter;