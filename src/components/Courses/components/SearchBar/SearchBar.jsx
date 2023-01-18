import './SearchBar.css';

import { Button, Input } from '../../../../common';

export const SearchBar = (props) => {
	const { search, onSearchChange } = props;

	const onClearClick = () => {
		onSearchChange('');
	};
	const onSearchHandler = (input) => {
		onSearchChange(input.target.value);
	};

	return (
		<div className='search-bar'>
			<Input
				className='input__container'
				placeHolderText='Enter course name...'
				type='text'
				size='50'
				onChange={onSearchHandler}
				value={search}
			/>
			<Button text='Clear' onClick={onClearClick} />
		</div>
	);
};
