import logo from './wb.png';
import './Logo.css';

export const Logo = ({ onLogoClick }) => (
	<img className='logo' src={logo} alt='My logo' onClick={onLogoClick} />
);
