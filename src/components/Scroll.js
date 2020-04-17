import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '2px rgba(0,0,100,0.1)', height: '900px'}}>
		{props.children}
		</div>
		)
};




export default Scroll;