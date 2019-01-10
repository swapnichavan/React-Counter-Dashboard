import React from 'react';

const Counter=(props)=>{
    return(
      <div className="d-flex align-items-center">
        <span className="m-2">{props.score}</span>
        <button
        className="btn btn-primary m-2"
        onClick={()=>props.handleDecrement()}>-</button>
        <button
        className="btn btn-primary m-2"
        onClick={()=>props.handleIncrement()}>+</button>
      	<button
      	className="btn btn-danger mr-5"
      	onClick={()=>props.handleDelete(props.id)}>Delete</button>
      </div>
      );
}

export default Counter;