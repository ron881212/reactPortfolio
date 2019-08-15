import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink disabled href="#">Ronald Glover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Websites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Phone Apps</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}