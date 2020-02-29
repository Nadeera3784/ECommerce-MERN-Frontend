import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

import { isAuthenticated } from '../helper/index';
const AdminDashboard = () => {
  useEffect(() => {
    if (isAuthenticated().user.role === 0) {
      window.location.href = '/user/dashboard';
    }
  });
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className='card'>
        <h4 className='card-header'>User Links</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/category'>
              Create Category
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/product'>
              Create Product
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/orders'>
              View Orders
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/products'>
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <Card className='mb-5'>
        <CardHeader>User Information</CardHeader>
        <CardBody>
          <ul className='list-group'>
            <li className='list-group-item'>{name}</li>
            <li className='list-group-item'>{email}</li>
            <li className='list-group-item'>
              {role === 1 ? 'Admin' : 'Registed User'}
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  };

  return (
    <>
      <div className='container'>
        <h2 className='text-center p-5'>Welcome {name}</h2>
        <div className='row'>
          <div className='col-lg-3 mb-5'>{adminLinks()}</div>
          <div className='col-lg-9 '>{adminInfo()}</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
