import './Login.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button } from '../../common/';
import { INITIAL_USER_LOGIN_CREDENTIALS } from '../../constants';

export const Login = () => {
	const [userCredentials, setUserCredentials] = useState(
		INITIAL_USER_LOGIN_CREDENTIALS
	);
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const onUserEmailInputHandler = (e) => {
		setUserCredentials({ ...userCredentials, email: e.target.value });
		console.log(userCredentials);
	};
	const onUserPasswordInputHandler = (e) => {
		setUserCredentials({ ...userCredentials, password: e.target.value });
		console.log(userCredentials);
	};

	const fetchUser = async () => {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(userCredentials),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	};

	async function loginHandler() {
		const result = await fetchUser();

		if (result.successful) {
			const token = result.result.split(' ')[1];
			const userName = result.user.name;

			localStorage.setItem('token', token);
			localStorage.setItem('userName', userName);
			navigate('/courses');
		} else {
			setErrorMessage(result.result || result.errors);
		}
	}
	const submitHandler = async (e) => {
		e.preventDefault();
		loginHandler();
	};

	return (
		<form className='login' onSubmit={submitHandler}>
			<p className='login__errors'>{errorMessage}</p>
			<h2>Login</h2>
			<Input
				className='login__input'
				label='Email'
				value={userCredentials.email}
				placeHolderText='Enter email'
				onChange={onUserEmailInputHandler}
			/>
			<Input
				className='login__input'
				label='Password'
				type='password'
				value={userCredentials.password}
				placeHolderText='Enter password'
				onChange={onUserPasswordInputHandler}
			/>
			<Button text='Login' type='submit' />
			<p>
				If you don't have an account you can{' '}
				<Link to='/register' className='login__redirect'>
					Register
				</Link>
			</p>
		</form>
	);
};
