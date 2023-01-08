import './TextArea.css';

export const TextArea = (props) => {
	const { label, value, placeholder, onChange } = props;

	return (
		<div className='text-area__container'>
			<label>{label}</label>
			<textarea
				className='text-area'
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></textarea>
		</div>
	);
};
