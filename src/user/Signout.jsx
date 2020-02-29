import React, { useEffect } from 'react';
import axios from 'axios';
import { API } from '../config';

const Signout = () => {
  useEffect(() => {
    localStorage.removeItem('jwtEcom');
    axios.get(`${API}/signout`).then(res => {
      window.location.href = '/';
    });
  });
  return <div></div>;
};

export default Signout;
