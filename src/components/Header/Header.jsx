import './Header.css';
import { useNavigate } from 'react-router-dom';

import { Logo } from './Logo';
import { Button } from '../../common';

export const Header = (props) => {
	const { onLogoClick } = props;
	const navigate = useNavigate();

	const loginClickHandle = () => {
		navigate('/login');
	};

	return (
		<header>
			<Logo onLogoClick={onLogoClick} />
			<div className='log-in'>
				<p className='nickname'>Vlad</p>
				<Button text='Login' onClick={loginClickHandle} />
			</div>
		</header>
	);
};
