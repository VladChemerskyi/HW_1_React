import './Header.css';
import { useNavigate } from 'react-router-dom';

import { Logo } from './Logo';
import { Button } from '../../common';

export const Header = (props) => {
	const { userName, isUserLogged, onLogoClick, setIsUserLogged, setUserName } =
		props;

	const navigate = useNavigate();

	const loginClickHandle = () => {
		if (isUserLogged) {
			setIsUserLogged(!isUserLogged);
			setUserName('');
			localStorage.removeItem('token');
		} else {
			navigate('/login');
		}
	};
	const buttonText = isUserLogged ? 'Logout' : 'Login';

	return (
		<header>
			<Logo onLogoClick={onLogoClick} />
			<div className='authorization'>
				<p className='nickname'>{userName}</p>
				<Button text={buttonText} onClick={loginClickHandle} />
			</div>
		</header>
	);
};
