import './TextArea.css';

export const TextArea = ({ label, value, onChange, placeholder }) => (
	<div className='text-area__block'>
		<label>{label}</label>
		<textarea
			className='text-area'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		></textarea>
	</div>
);
