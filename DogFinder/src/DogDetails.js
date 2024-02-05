import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Facts from './Facts';
import './DogDetails.css'

function DogDetails({dogs}){
  const {name} = useParams();
  const dog = dogs.find(dog => dog.name === name);

  if (!dog) {
    return <div className="DogDetails-container">Dog not found</div>;
  }
  return (
    <div className="DogDetails">
      <h4>Doggie details</h4>
      <div className="DogDetails-container">     
        <img src={dog.src} alt={dog.name}/>
        <div>
          Name: {name} <br/>
          Age: {dog.age} <br/>
          <Facts facts={dog.facts} />
        </div>
      </div>
    </div>
    
  )
}


export default DogDetails;