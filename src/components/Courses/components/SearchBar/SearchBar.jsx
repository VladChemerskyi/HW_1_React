import './SearchBar.css';

import { Button, Input } from '../../../../common';

export const SearchBar = ({ search, setSearch }) => (
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
