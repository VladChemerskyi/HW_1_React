import './Header.css';
import { useNavigate } from 'react-router-dom';

import { Logo } from './Logo';
import { Button } from '../../common';

export const Header = (props) => {
	const { userName, isUserLogged, onLogoClick, onLogOutHandler } = props;

	const navigate = useNavigate();

	const authorizationClickHandle = () => {
		if (isUserLogged) {
			onLogOutHandler();
		} else {
			navigate('/login');
		}
	};

	return (
		<header>
			<Logo onLogoClick={onLogoClick} />
			<div className='authorization'>
				<p className='nickname'>{userName}</p>
				<Button
					text={isUserLogged ? 'Logout' : 'Login'}
					onClick={authorizationClickHandle}
				/>
			</div>
		</header>
	);
};
