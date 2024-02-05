import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <nav className="Nav">
      <h3>Welcome to the color factory.</h3>
      <Link className="Nav-link" to="/colors/new">Add a color</Link>
    </nav>
  );
}

export default Nav;
