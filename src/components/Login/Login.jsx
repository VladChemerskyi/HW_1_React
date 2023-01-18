import './Login.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button } from '../../common/';
import { INITIAL_USER_LOGIN_CREDENTIALS } from '../../constants';

export const Login = (props) => {
	const { onLogin } = props;

	const [userCredentials, setUserCredentials] = useState(
		INITIAL_USER_LOGIN_CREDENTIALS
	);
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const onUserEmailInputHandler = (e) => {
		setUserCredentials({ ...userCredentials, email: e.target.value });
		console.log(userCredentials);
	};
	const onUserPasswordInputHandler = (e) => {
		setUserCredentials({ ...userCredentials, password: e.target.value });
		console.log(userCredentials);
	};

	async function loginHandler() {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(userCredentials),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful) {
			const token = result.result.split(' ')[1];
			const userName = result.user.name;

			localStorage.setItem('token', token);
			setUserCredentials(INITIAL_USER_LOGIN_CREDENTIALS);
			onLogin(userName);
			navigate('/courses');
		} else {
			setMessage(result.result || result.errors);
		}
	}

	return (
		<div className='login'>
			<p className='login__errors'>{message}</p>
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
			<Button text='Login' onClick={loginHandler} />
			<p>
				If you don't have an account you can{' '}
				<Link to='/register' className='login__redirect'>
					Register
				</Link>
			</p>
		</div>
	);
};
