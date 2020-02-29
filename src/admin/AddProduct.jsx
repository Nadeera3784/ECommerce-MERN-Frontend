import React, {useEffect} from 'react'
import { isAuthenticated } from '../helper/index';
import { Link } from 'react-router-dom';
import { API } from '../config';
import axios from 'axios';

const AddProduct = () => {
    useEffect(() => {
      if (isAuthenticated().user.role === 0) {
        window.location.href = '/user/dashboard';
      }
    });

    const {user, token} = isAuthenticated()
    return (
        <>
            <h2 className='text-center pt-5 pb-3'>Add a new product</h2>  
            <div className="row">
                <div className="col-md-8 offest-md-2">
                    good
                </div>
            </div>
        </>
    )
}

export default AddProduct
