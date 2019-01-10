import React from 'react';


const AddPlayer=(props)=>{
	return(
		<form onSubmit={props.handleAddPlayer}>
			<div className="input-group w-100">
			<input className="form-control" type="text" name="option"/>
			<button className="btn btn-primary w-25">Add Player</button>				
			</div>
		</form>
		);
}

export default AddPlayer;