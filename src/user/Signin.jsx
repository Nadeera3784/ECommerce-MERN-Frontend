import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import './Signup.css';
import { API } from '../config';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: ''
  });

  const [loading, setLoading] = useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { email, password, error, success } = formData;

  useEffect(() => {
    if (redirectToReferrer) {
      window.location.href = '/';
    }
  });
  // high order function
  const handleChange = name => event => {
    setFormData({ ...formData, error: '', [name]: event.target.value });
  };

  const handleSumit = e => {
    e.preventDefault();
    signin({ email, password });
  };

  const signin = user => {
    setLoading(true);
    return axios
      .post(`${API}/signin`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        setLoading(false);
        setRedirectToReferrer(true);
        setFormData({
          ...formData,
          email: '',
          password: '',
          error: '',
          success: true
        });
        console.log(res.data);
        authentication(JSON.stringify(res.data));
      })
      .catch(err => {
        setLoading(false);
        if (err.response.data.err) {
          setFormData({
            ...formData,
            error: err.response.data.err,
            success: false
          });
        } else if (err.response.data.errors) {
          setFormData({
            ...formData,
            error: err.response.data.errors,
            success: false
          });
        } else if (err.response.data.error) {
          setFormData({
            ...formData,
            error: err.response.data.error,
            success: false
          });
        }
      });
  };

  const showError = (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const loadingContent = (
    <Spinner style={{ width: '3rem', height: '3rem' }} className='spinner' />
  );

  const formContent = (
    <form>
      <h3>Sign In</h3>
      {showError}

      <div className='form-group'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          onChange={handleChange('email')}
          value={email}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={handleChange('password')}
          value={password}
        />
      </div>

      <button
        type='submit'
        className='btn btn-dark btn-block'
        onClick={handleSumit}
      >
        Submit
      </button>
    </form>
  );

  const authentication = data => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwtEcom', data);
    }
  };

  return (
    <Container className='App'>
      {loading ? loadingContent : formContent}
    </Container>
  );
};

export default Signin;
