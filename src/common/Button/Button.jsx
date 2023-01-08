import './Button.css';

export const Button = (props) => {
	const { text, onClick } = props;

	return (
		<button className='button' onClick={onClick}>
			{text}
		</button>
	);
};
