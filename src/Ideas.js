import React from 'react';
import './Ideas.css';

const Ideas = props => {

  return (
    <div className='idea-card'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button type='button' onClick={ () => props.deleteIdea(props.id) }>X</button>
    </div>
  )
}

export default Ideas;
