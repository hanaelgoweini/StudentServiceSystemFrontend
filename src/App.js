import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>

        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;