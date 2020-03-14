import React from 'react';
import Ideas from './Ideas';

const IdeasContainer = props => {

  const idea = props.ideas.map(item => <Ideas id={item.id}
    title={item.title}
    description={item.description}
    deleteIdea={props.deleteIdea}/>)

  return (
    <section>
      {idea}
    </section>
  )

}

export default IdeasContainer;
