import React, { useState } from 'react';
import { addIdea } from './App';

const Form = props => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const submitIdea = () => {
    props.addIdea({id: Math.random(), title: title, description: description});
    setTitle('');
    setDescription('');
  }

    return (
      <div>
        <input
          type='text'
          name='title'
          onChange={handleTitleChange}
          value={title}
          placeholder='title...'
        />
        <input
          type='text'
          name='description'
          onChange={handleDescriptionChange}
          value={description}
          placeholder='description...'
        />
        <button type='button' onClick={submitIdea}>send it!</button>
      </div>
    )

}

export default Form;
