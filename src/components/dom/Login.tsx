import React, { useState } from 'react';
import { register, listenForRegister, listenForErrors } from '../../utils/client';

export default function Login({ setUsername }) {
	const [queryUsername, setQueryUsername] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		setUsername(queryUsername)
	};

	return (
		<div className='login-container'>
			<img className='logo' src='/assets/images/logo.svg' />
			<form className='login' onSubmit={onSubmit}>
				<div className='input'>
					<label htmlFor='username'>Enter your name</label>
					<input
						id='username'
						name='username'
						className='username-input'
						value={queryUsername}
						onChange={e => setQueryUsername(e.target.value)}
						type='text'></input>
				</div>

				<button className='login' type='submit'>
					Log in
				</button>
			</form>
		</div>
	);
};
