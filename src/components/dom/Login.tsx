import React, { useState } from 'react';
import { register, listenForRegister, listenForErrors } from '../../utils/client';

export default function Login(){
	const [queryUsername, setQueryUsername] = useState('');
	const [queryAvatar, setQueryAvatar] = useState('');
	const [error, setError] = useState({ code: '', message: '' });

	const onError = response => {
		setError({
			code: response.code,
			message: response.message,
		});
	};

	const onRegister = register => {
		if (error.code === '') {
			console.log("registered !")
		} else{
			console.log("register failed, check error");
		}
	};

	const onSubmit = e => {
		e.preventDefault();
		listenForRegister(response => onRegister(response));
		listenForErrors(response => onError(response));
		register({ username: queryUsername, avatar: queryAvatar });
	};

	return (
		<div className='login-container'>
			<img className='logo' src='/assets/images/logo.svg' />
			<form className='login' onSubmit={onSubmit}>
				<div>
					<label htmlFor='username'>Enter your name</label>
					<input
						id='username'
						name='username'
						className='mb-5 username-input'
						value={queryUsername}
						onChange={e => setQueryUsername(e.target.value)}
						type='text'></input>
					<span>{error.message}</span>
				</div>

				<p className='pick'>Pick your bird</p>

				<div>
					<label className='radio-container'>
						<input
							id='avatar'
							name='avatar'
							className='mb-5 avatar-input'
							value='/bird-orange.png'
							onChange={e => setQueryAvatar('/bird-orange.png')}
							type='radio'></input>{' '}
						<span className='checkbox orange-bird'></span>
					</label>
				</div>

				<button className='login' type='submit'>
					Log in
				</button>
			</form>
		</div>
	);
};
