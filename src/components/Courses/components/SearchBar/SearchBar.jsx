import './SearchBar.css';

import { Button, Input } from '../../../../common';

export const SearchBar = (props) => {
	const { search, setSearch } = props;

	return (
		<div className='search-bar'>
			<Input
				placeHolderText='Enter course name...'
				type='text'
				size='50'
				onChange={(input) => {
					setSearch(input.target.value);
				}}
				value={search}
			/>
			<Button
				text='Clear'
				onClick={() => {
					setSearch('');
				}}
			/>
		</div>
	);
};
