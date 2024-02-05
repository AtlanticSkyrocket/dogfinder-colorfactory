import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import './ColorList.css'

function ColorList({colors}) {

  return (
    <div>
      <Nav />
      <div>
        <div>
          <span> Please select a color.</span>
        </div>
        <ul className="ColorsList-list">
          { colors ? colors.map(color => <li key={color.colorName}><Link to={`/colors/${color.colorName}`}>{color.colorName}</Link></li>) : <li><span>No colors yet!</span></li>}
        </ul>        
      </div>
    </div>
  )
}

export default ColorList;