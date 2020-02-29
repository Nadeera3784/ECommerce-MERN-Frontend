import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return 'active';
  } else {
    return '';
  }
};
const Example = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <Container>
          <NavbarBrand href='/'>Presummit Ecommerce</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/' className={`${isActive(history, '/')}`}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/signin'
                  className={`${isActive(history, '/signin')}`}
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/signup'
                  className={`${isActive(history, '/signup')}`}
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default withRouter(Example);