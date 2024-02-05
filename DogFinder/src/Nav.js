import React from 'react';
import {Link} from 'react-router-dom';
import'./Nav.css'

function Nav({ dogs }) {
  return (
    <nav className="nav">
      <ul>
        <li key="home" ><Link to='/dogs'>Home</Link></li>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  dogs: ["whiskey", "Perry", "Duke"]
};

export default Nav;