import React from 'react';

function Post(props){
	return(
		<div className='post'>
		<br />
			<img className="ilonMini" src={require("../../img/ilon.jpg")} />
			<span>{props.name}</span>
			<p>{props.text}</p>
		</div>
	)
}

export default Post;