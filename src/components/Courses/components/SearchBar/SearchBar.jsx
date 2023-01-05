import { useState, useEffect } from 'react';
import './SearchBar.css';

import { Input } from '../../../../common/Input/Input.jsx';
import { Button } from '../../../../common/Button/Button.jsx';

function SearchBar({ courses, setFilteredCourses }) {
	const [searched, setSearched] = useState('');

	useEffect(() => {
		if (searched !== '') {
			setFilteredCourses(
				courses.filter((course) =>
					course.title.toLowerCase().includes(searched.toLowerCase())
				)
			);
		} else {
			setFilteredCourses(courses);
		}
	}, [searched, courses, setFilteredCourses]);

	return (
		<div className='search-bar'>
			<Input
				placeHolderText='Enter course name...'
				type='text'
				size='50'
				onChange={(input) => {
					setSearched(input.target.value);
				}}
				value={searched}
			/>
			<Button
				text='Clear'
				onClick={() => {
					setSearched('');
				}}
			/>
		</div>
	);
}

export default SearchBar;
