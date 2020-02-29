import React, { useState } from 'react';
import { Container, Alert } from 'reactstrap';
import './Signup.css';
import { API } from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    error: '',
    success: false
  });

  const { name, email, password, password2, error, success } = formData;
  // high order function
  const handleChange = name => event => {
    setFormData({ ...formData, error: '', [name]: event.target.value });
  };

  const handleSumit = e => {
    e.preventDefault();
    signup({ name, email, password }).then(data => {
      if (data) {
        console.log(data);
      }
    });
  };

  const signup = user => {
    return axios
      .post(`${API}/signup`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        setFormData({
          ...formData,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        });
      })
      .catch(err => {
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

  const showSuccess = (
    <div
      className='alert alert-info'
      style={{ display: success ? '' : 'none' }}
    >
      New account is created. Please <Link to='/signin'>Signin</Link>
    </div>
  );

  return (
    <Container className='App'>
      <form>
        <h3>Sign Up</h3>
        {showError}
        {showSuccess}
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter name'
            onChange={handleChange('name')}
            value={name}
          />
        </div>
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
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            onChange={handleChange('password2')}
            value={password2}
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
    </Container>
  );
};

export default Signup;
