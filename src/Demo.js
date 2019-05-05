import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name})  =>{
	return <div className="maindiv_style"> 
			<h1> hello world </h1>
			<p> working on your react app </p>
			<span> hello my name is : {name} </span>
		</div>
}	

export default Demo;