import './Login.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button } from '../../common/';

const initialUser = {
	email: '',
	password: '',
};
export const Login = () => {
	const [user, setUser] = useState(initialUser);
	const [message, setMessage] = useState('');
	const navi = useNavigate();

	const onUserEmailInputHandler = (e) => {
		setUser({ ...user, email: e.target.value });
		console.log(user);
	};
	const onUserPasswordInputHandler = (e) => {
		setUser({ ...user, password: e.target.value });
		console.log(user);
	};

	async function registrationHandler() {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		const token = result.result.split(' ')[1];

		if (result.successful === true) {
			localStorage.setItem('token', token);
			setUser(initialUser);
			navi('/courses');
		} else {
			setMessage(result.result || result.errors);
		}
	}

	return (
		<div>
			<p>{message}</p>

			<h2>Login</h2>
			<Input
				label='Email'
				value={user.email}
				placeHolderText='Enter email'
				onChange={onUserEmailInputHandler}
			/>
			<Input
				label='Password'
				type='password'
				value={user.password}
				placeHolderText='Enter password'
				onChange={onUserPasswordInputHandler}
			/>
			<Button text='Login' onClick={registrationHandler} />
			<p>
				If you don't have an account you can{' '}
				<Link to='/register'>Register</Link>
			</p>
		</div>
	);
};
