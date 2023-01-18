import './Input.css';

export const Input = (props) => {
	const { label, type, placeHolderText, size, onChange, value, className } =
		props;

	return (
		<div className={className}>
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeHolderText}
				size={size}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};
