import './Registration.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from '../../common/';
import { INITIAL_USER_REGISTRATION_CREDENTIALS } from '../../constants';

export const Registration = () => {
	const [newUserCredentials, setNewUserCredentials] = useState(
		INITIAL_USER_REGISTRATION_CREDENTIALS
	);
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	const onUserNameInputHandler = (e) => {
		setNewUserCredentials({ ...newUserCredentials, name: e.target.value });
		console.log(newUserCredentials);
	};
	const onUserEmailInputHandler = (e) => {
		setNewUserCredentials({ ...newUserCredentials, email: e.target.value });
		console.log(newUserCredentials);
	};
	const onUserPasswordInputHandler = (e) => {
		setNewUserCredentials({ ...newUserCredentials, password: e.target.value });
		console.log(newUserCredentials);
	};

	async function registrationHandler() {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUserCredentials),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful) {
			setNewUserCredentials(INITIAL_USER_REGISTRATION_CREDENTIALS);
			navigate('/login');
		} else {
			setMessage(result.errors);
		}
	}

	return (
		<div className='registration'>
			<p>{message}</p>

			<h2>Registration</h2>
			<Input
				className='registration__input'
				label='Name'
				value={newUserCredentials.name}
				placeHolderText='Enter name'
				onChange={onUserNameInputHandler}
			/>
			<Input
				className='registration__input'
				label='Email'
				value={newUserCredentials.email}
				placeHolderText='Enter email'
				onChange={onUserEmailInputHandler}
			/>
			<Input
				className='registration__input'
				label='Password'
				type='password'
				value={newUserCredentials.password}
				placeHolderText='Enter password'
				onChange={onUserPasswordInputHandler}
			/>
			<Button text='Registration' onClick={registrationHandler} />
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};
