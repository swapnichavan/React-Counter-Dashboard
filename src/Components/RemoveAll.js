import React from 'react';

const RemoveAll=(props)=>{
	return(
		<button className="btn btn-danger w-100"
		onClick={props.handleRemoveAll}>Remove All</button>
	)
}

export default RemoveAll;