import React from 'react';

const Header=(props)=>{
  return(
    <div className="d-flex
    align-items-center
    bg-secondary
    text-white-50
    justify-content-around">
      <h1>{props.title}</h1>  
      <h4>Players:<span className="badge badge-primary">{props.players}</span></h4>
    </div>
    );
}

export default Header;