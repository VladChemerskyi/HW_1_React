import logo from './wb.png';
import './Logo.css';

export const Logo = ({ logoClick }) => (
	<img className='logo' src={logo} alt='My logo' onClick={logoClick} />
);
