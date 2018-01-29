import React from 'react';
import PropTypes from 'prop-types';
import LoginButtonContainer from '../../Containers/LoginButtonContainer';
import Container from '../Container';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import MenuRight from '../MenuRight';
import Button from '../Button';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const Navbar = ({ isAuthenticated }) => (
  <header>
    <Menu>
      <Container>
        <MenuItem to="/">Home</MenuItem>
        {
          !isAuthenticated &&
          <MenuRight>
            <MenuItem to="/signup">
              <Button>Sign Up</Button>
            </MenuItem>
            <MenuItem>
              <LoginButtonContainer />
            </MenuItem>
          </MenuRight>
        }
      </Container>
    </Menu>
  </header>
);

Navbar.propTypes = propTypes;

export default Navbar;
