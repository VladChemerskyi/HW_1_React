import './Registration.css';
import { Input, Button } from '../../common/';

export const Registration = () => {
	// const newUser = {
	// 	name,
	// 	password,
	// 	email,
	// };
	// const response = await fetch('http://localhost:4000/register', {
	// 	method: 'POST',
	// 	body: JSON.stringify(newUser),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	// const result = await response.json();

	return (
		<div>
			<h2>Registration</h2>
			<Input label='Name' placeHolderText='Enter name' />
			<Input label='Email' placeHolderText='Enter email' />
			<Input label='Password' placeHolderText='Enter password' />
			<Button text='Registration' />
		</div>
	);
};
