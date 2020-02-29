import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Signin from './user/Signin.jsx';
import Signup from './user/Signup.jsx';
import Signout from './user/Signout.jsx';
import App from './App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signout' exact component={Signout} />
        <Route path='/' exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
