import './Header.css';

import { Logo } from './Logo';
import { Button } from '../../common';

export const Header = (props) => {
	const { onLogoClick } = props;

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
