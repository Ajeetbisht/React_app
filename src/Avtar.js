import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './Avtar.css';
import Avtarlist from './Avtarlist';
import 'tachyons';

class Avtar extends Component{

	constructor(){
		super();
		this.state = {
			name : "welcome to website"
		}
	}

	buttonclick(){
		this.setState({
			name : "You have clicked to the button"
		})
	}

	render() {

	const Avtarlistarray = [
	 	{
			id: 1,
			name: "Ajeet",
			work: "FullStack developer"
		},
		{
			id: 2,
			name: "Shubham",
			work: "AI Enginer"
		},
		{
			id: 3,
			name: "Sahil",
			work: "Investment Banker"
		},
		{
			id: 4,
			name: "Hardik Bisht",
			work: "Electrical Enginer" 
		},
	]

	const arrayavtarcard = Avtarlistarray.map( (Avtarcard,i)=>{
		return <Avtarlist key={i}
		 		id={Avtarlistarray[i].id}
		 		name={Avtarlistarray[i].name}
		 		work={Avtarlistarray[i].work} />
	})

	return (
		<div className="mainpage">
			<h1> welcome ot React web </h1>
				{arrayavtarcard}
			<button onClick = { () => this.buttonclick() } className="butt"> Click here to see changes </button>
			<p> {this.state.name} </p>
		</div>
	);
	}
}

export default Avtar;