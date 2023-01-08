import './Header.css';

import { Logo } from './Logo/Logo.jsx';
import { Button } from '../../common';

export const Header = ({ onLogoClick }) => {
	return (
		<header>
			<Logo onLogoClick={onLogoClick} />
			<div className='log-in'>
				<p className='nickname'>Vlad</p>
				<Button text='Logout' />
			</div>
		</header>
	);
};
