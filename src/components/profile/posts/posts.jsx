import React from 'react';
import Post from './post.jsx';
import './post.css'

function Posts(){
	return(
		<div className='posts'>
			<h2>My posts</h2>
			<input placeholder='enter the post' />
			<button>Add post</button>
		<Post name='Elon Mask' text='text' />
		<Post name='Иванов Иван' text='Привет' />
		<Post name='Петронов Петрон' text='Пока' />
		</div>
	)
}
let obj = {name: 'Иван',
           name2: 'Петр',
           age: '30'};
console.log(obj);

export default Posts