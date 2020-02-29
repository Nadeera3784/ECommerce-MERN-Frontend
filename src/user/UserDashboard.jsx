import React, {useEffect} from 'react';
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
const UserDashboard = () => {
  useEffect(() => {
    if (isAuthenticated().user.role === 1) {
      window.location.href = '/admin/dashboard';
    }
  });
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className='card'>
        <h4 className='card-header'>User Links</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/cart'>
              My Cart
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
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

  const purchaseHistory = () => {
    return (
      <Card className='mb-5'>
        <CardHeader>Purchase history</CardHeader>
        <CardBody>
          <ul className='list-group'>
            <li className='list-group-item'>history</li>
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
          <div className='col-lg-3 mb-5'>{userLinks()}</div>
          <div className='col-lg-9 '>
            {userInfo()}
            {purchaseHistory()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
