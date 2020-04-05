import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/login/Login';
import SecHome from './components/homepage-sec/pagesec';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={SecHome} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
