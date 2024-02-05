import React, { useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import './Color.css';

function Color({colors}) {
  const navigate = useNavigate();
  const { name } = useParams();

  const foundColor = colors.find(color => color.colorName === name) || null;

  useEffect(() => {
    if(!foundColor)
      navigate('/', { replace: true });
  }, [foundColor, navigate]);

  if(!foundColor)
    return null;

  return (
    <div className="Color-container" style={{backgroundColor: foundColor.colorValue}} >
      <div className="Color-details">
        <span>THIS IS {foundColor.colorName.toUpperCase()}</span>
        {foundColor.colorName.toUpperCase() === 'GREEN' ? <span>IT'S THE BEST!!!</span> : <span>ISN'T IT BEAUTIFUL?</span>}
      </div>
      <div className="Color-nav">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default Color;