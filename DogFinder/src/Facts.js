import React from 'react';
import './Facts.css';
function Facts({facts}) {

  return (
    <ul className='Facts-list'>
      {facts.map((fact,idx) => <li key={idx}>{fact}</li>)}
    </ul>

  )
}

export default Facts;