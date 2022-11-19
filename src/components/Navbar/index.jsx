import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container, Link } from './style';

const Navbar = () => {
  return (
    <>
    
    <Container>
      <Link activeStyle={{color: "coral"}} exact to={'/'}>
          Logo
      </Link>
      <Link activeStyle={{color: "coral"}} to={'/home'}>
          Home
      </Link>
      <Link activeStyle={{color: "coral"}} to={'/templates'}>
          Templates
      </Link>
      <Link activeStyle={{color: "coral"}} to={'/pages'}>
      Pages
      </Link>
      <Link activeStyle={{color: "coral"}} to={'/elements'}>
      Elements
      </Link>
    </Container>

      <Outlet />
    </>
  )
};

export default Navbar;
