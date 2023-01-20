import './Header.css';
import { useNavigate } from 'react-router-dom';

import { Logo } from './Logo';
import { Button } from '../../common';

export const Header = (props) => {
	const { onLogoClick } = props;

	const navigate = useNavigate();

	const isUserAuthorized = localStorage.getItem('token');

	const authorizationClickHandle = () => {
		if (isUserAuthorized) {
			localStorage.removeItem('token');
			localStorage.removeItem('userName');
		}
		navigate('/login');
	};

	return (
		<header>
			<Logo onLogoClick={onLogoClick} />
			<div className='authorization'>
				<p className='nickname'>{localStorage.getItem('userName')}</p>
				<Button
					text={isUserAuthorized ? 'Logout' : 'Login'}
					onClick={authorizationClickHandle}
				/>
			</div>
		</header>
	);
};
