import './Header.css';

import { Logo } from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';

function Header({ onLogoClick }) {
	return (
		<header>
			<Logo logoClick={onLogoClick} />
			<div className='log-in'>
				<p className='nick-name'>Vlad</p>
				<Button text='Logout' />
			</div>
		</header>
	);
}

export default Header;
