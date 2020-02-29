import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Link className='pt-5'>
          <img
            src={require('./assests/showcase.png')}
            alt='showcase'
            className='feature-panel pt-3'
          />
        </Link>
      </Container>
    </div>
  );
}

export default App;
