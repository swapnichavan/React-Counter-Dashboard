import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';
import RemoveAll from './RemoveAll';
import {v4} from 'uuid';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  this.handleIncrement=this.handleIncrement.bind(this);
  this.handleDecrement=this.handleDecrement.bind(this);
  this.handleDelete=this.handleDelete.bind(this);
  this.handleAddPlayer=this.handleAddPlayer.bind(this);
  this.handleRemoveAll=this.handleRemoveAll.bind(this);

	this.state={
		Players:[
  {
    id:v4(),
    name:"John",
    score:0
  },
  {
    id:v4(),
    name:"Mark",
    score:0
  },
  {
    id:v4(),
    name:"John",
    score:0
  }
  ]
  }
	}

	handleIncrement(index){
		console.log(index);
		const players=[...this.state.Players];
		players[index]={...players[index]};
		players[index].score++;
		// console.log(this.state.players[index]);
		this.setState({
			Players:players
		});
	}

	handleDecrement(index){
		console.log(index);
		const Players=[...this.state.Players];
		Players[index]={...Players[index]}
		Players[index].score--;
		this.setState({
			Players
		});
		
	}

	handleDelete(id){
		console.log(id);
		this.setState((prevState)=>{
			return{
				Players:prevState.Players.filter((player)=>player.id!==id)
			}
		});
	}

	handleAddPlayer(e){
		e.preventDefault();
		// console.log(e.target.elements.option.value);
		const Players=[...this.state.Players];
		// console.log(Players);
		let name=e.target.elements.option.value;
		if(name==="")
		{
			alert('Enter valid name')
		}
		else
		{
			this.setState({
			Players:Players.concat({
				name:e.target.elements.option.value.trim(),
				id:v4(),
				score:0
			})

		})
		}
		e.target.elements.option.value="";
	}

	handleRemoveAll(){
		console.log("removed")
		this.setState(()=>{
			return{
				Players:[]
			}
		})
	}

	render(){
    return(
      <div className="d-flex
      justify-content-around
      flex-column jumbotron">
      <div className="w-100">
      <Header
      title="Dashboard"
      players={this.state.Players.length}
      />
      {
      this.state.Players.map((player,index)=>
      <Player
      key={player.id}
      name={player.name}
      id={player.id}
      score={player.score}
      handleIncrement={()=>this.handleIncrement(index)}
      handleDecrement={()=>this.handleDecrement(index)}
      handleDelete={this.handleDelete}
      />)
      }
      <AddPlayer handleAddPlayer={this.handleAddPlayer}/>
      <RemoveAll handleRemoveAll={this.handleRemoveAll}/>
      </div>
      </div>
      )
  }
}

export default Dashboard;