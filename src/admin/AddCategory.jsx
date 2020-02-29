import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../helper/index';
import { Link } from 'react-router-dom';
import { API } from '../config';
import axios from 'axios';
import {Spinner} from 'reactstrap'
const AddCategory = () => {
  useEffect(() => {
    if (isAuthenticated().user.role === 0) {
      window.location.href = '/user/dashboard';
    }
  });
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [laoding, setLoading] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError('');
    setName(e.target.value);
  };

  const clickSubmit = e => {
    setLoading(true);
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to api to create category
    axios
      .post(
        `${API}/category/create/${user._id}`,
        { name },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        setLoading(false);
        setError('');
        setSuccess(true);
      })
      .catch(err => {
        setLoading(false);
        if (err.response.data.error) {
          setError(err.response.data.error);
        }
      });
  };

  const newCategoryFom = () => (
    <form onSubmit={clickSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          className='form-control'
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className='btn btn-outline-primary'>Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <div className='alert alert-success'>{name} is created</div>;
    }
  };

  const showError = () => {
    if (error) {
      return (
        <div
          className='alert alert-danger'
          style={{ display: error ? '' : 'none' }}
        >
          Category should be unique
        </div>
      );
    }
  };

  const goBack = () => (
    <div className='mt-5'>
      <Link to='/admin/dashboard' className='text-secondary '>
        Back to Dashboard
      </Link>
    </div>
  );
  const loadingContent = (
    <Spinner style={{ width: '3rem', height: '3rem' }} className='spinner' />
  );

  const formContent = (
    <>
      {goBack()}
      {showSuccess()}
      {showError()}
      {newCategoryFom()}
    </>
  );
  return (
    <>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {laoding ? loadingContent : formContent}
          

          
        </div>
      </div>
    </>
  );
};

export default AddCategory;
