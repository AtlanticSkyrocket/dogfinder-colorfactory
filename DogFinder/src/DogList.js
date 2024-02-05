import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import './DogList.css';

function DogList({dogList}){
  const navigate = useNavigate();
  const handleImageClick = (dog) => {
    navigate(`/dogs/${dog.name}`, { state: { dogs: dogList } });
  };
  
  return (
    <div>
      <h2>Current Dogs</h2>
      <div className="DogList-container">
      {dogList.map(dog => (
      <div key={dog.name} className="DogList-cell">
        <h4>{dog.name}</h4>
        <img src={dog.src} alt={dog.name} onClick={() => handleImageClick(dog)}/>
      </div>
        ))}
    </div>
    </div>
    
  )
}
export default DogList;