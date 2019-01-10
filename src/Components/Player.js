import React from 'react';
import Counter from './Counter';

const Player=(props)=>{
  return(
    <div className="d-flex
    list-group-item
    justify-content-between
    align-items-center">
     <span className="pl-5">{props.name}</span>
      <div>
      <Counter 
      score={props.score}
      handleIncrement={props.handleIncrement}
      handleDecrement={props.handleDecrement}
      handleDelete={props.handleDelete}
      id={props.id}
      />
    </div>
    </div>
    );
}

export default Player;