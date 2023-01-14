import './Registration.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from '../../common/';

const initialNewUser = {
	name: '',
	email: '',
	password: '',
};
export const Registration = () => {
	const [newUser, setNewUser] = useState(initialNewUser);
	const [message, setMessage] = useState('');
	const navi = useNavigate();

	const onUserNameInputHandler = (e) => {
		setNewUser({ ...newUser, name: e.target.value });
		console.log(newUser);
	};
	const onUserEmailInputHandler = (e) => {
		setNewUser({ ...newUser, email: e.target.value });
		console.log(newUser);
	};
	const onUserPasswordInputHandler = (e) => {
		setNewUser({ ...newUser, password: e.target.value });
		console.log(newUser);
	};

	async function registrationHandler() {
		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(result);

		if (result.errors) {
			setMessage(result.errors);
		} else {
			setNewUser(initialNewUser);
			navi('/login');
		}
	}

	return (
		<div>
			<p>{message}</p>

			<h2>Registration</h2>
			<Input
				label='Name'
				value={newUser.name}
				placeHolderText='Enter name'
				onChange={onUserNameInputHandler}
			/>
			<Input
				label='Email'
				value={newUser.email}
				placeHolderText='Enter email'
				onChange={onUserEmailInputHandler}
			/>
			<Input
				label='Password'
				type='password'
				value={newUser.password}
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
