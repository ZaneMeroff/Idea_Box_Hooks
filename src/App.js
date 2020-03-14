import React, { useState } from 'react';
import Form from './Form.js';
import IdeasContainer from './IdeasContainer';
import Ideas from './Ideas';

const App = () => {

  const [ ideas, setIdeas ] = useState([])

  const addIdea = idea => {
    setIdeas( [...ideas, idea] )
  }

  const deleteIdea = id => {
    let filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas( filteredIdeas )
  }

  return (
    <main>
      <h1>🍄Hoookin BoX o' IdEaS 🥦</h1>
      <Form addIdea={addIdea}/>
      <IdeasContainer ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )

}

export default App;
