import { useState } from 'react';

import { Button } from '../../common';
import { SearchBar, CoursesList } from './components';

const Courses = (props) => {
	const { courses, authors, onNewCourseAdd } = props;
	const [search, setSearch] = useState('');

	const filteredCourses = courses.filter((course) =>
		course.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<div className='main-page__header'>
				<SearchBar search={search} onSearchChange={setSearch} />
				<Button text='Add new course' onClick={onNewCourseAdd} />
			</div>
			<CoursesList courses={filteredCourses} authors={authors} />
		</div>
	);
};

export { Courses };
