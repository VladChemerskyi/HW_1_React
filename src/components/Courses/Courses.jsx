import { useState } from 'react';

import { Button } from '../../common';
import { SearchBar, CoursesList } from './components/';

function Courses(props) {
	const { courses, authors, onAddNewCourseClick } = props;
	const [search, setSearch] = useState('');

	return (
		<div>
			<div className='main-page__header'>
				<SearchBar search={search} setSearch={setSearch} />
				<Button
					text='Add new course'
					onClick={() => {
						onAddNewCourseClick();
					}}
				/>
			</div>
			<CoursesList courses={courses} authors={authors} search={search} />
		</div>
	);
}

export { Courses };
