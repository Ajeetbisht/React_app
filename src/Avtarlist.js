import React from 'react';

const Avtarlist = (props) =>{
	return (<div className="avtarStyle ma4 bg-light-purple dib pa3 grow shadow-3 tc">
				<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar" />
			<h1 className="tc"> {props.name} </h1>
			<p> {props.work} </p>
		</div>
	)
}

export default Avtarlist;