import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Signin from './user/Signin.jsx';
import Signup from './user/Signup.jsx';
import Signout from './user/Signout.jsx';
import App from './App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import PrivateRoute from './helper/PrivateRoute.jsx';
import AdminRoute from './helper/AdminRoute.js';
import AddCategory from './admin/AddCategory.jsx';
import AddProduct from './admin/AddProduct.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signout' exact component={Signout} />
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/create/category' exact component={AddCategory} />
        <AdminRoute path='/create/product' exact component={AddProduct} />

        <Route path='/' exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
