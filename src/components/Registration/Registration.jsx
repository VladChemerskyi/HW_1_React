import './Registration.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from '../../common/';
import { INITIAL_USER_REGISTRATION_CREDENTIALS } from '../../constants';

export const Registration = () => {
	const [newUserCredentials, setNewUserCredentials] = useState(
		INITIAL_USER_REGISTRATION_CREDENTIALS
	);
	const [errorMessage, setErrorMessage] = useState('');

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

	const registrateUser = async () => {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUserCredentials),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return await response.json();
	};

	const registrationHandler = async () => {
		const result = await registrateUser();

		if (result.successful) {
			navigate('/login');
		} else {
			setErrorMessage(result.errors);
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		await registrationHandler();
	};

	return (
		<form className='registration' onSubmit={submitHandler}>
			<p>{errorMessage}</p>
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
			<Button text='Registration' type='submit' />
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};
