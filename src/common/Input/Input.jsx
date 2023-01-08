import './Input.css';

export const Input = (props) => {
	const { label, type, placeHolderText, size, onChange, value } = props;

	return (
		<div className='input__container'>
			<label>{label}</label>
			<input
				className='input'
				type={type}
				placeholder={placeHolderText}
				size={size}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};
