import logo from './wb.png';
import './Logo.css';

export const Logo = (props) => {
	const { onLogoClick } = props;

	return (
		<img className='logo' src={logo} alt='My logo' onClick={onLogoClick} />
	);
};
