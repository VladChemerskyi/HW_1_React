import { useState } from 'react';

import { Button } from '../../common/Button/Button.jsx';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

import parseDuration from '../../helpers/pipeDuration.js';

function Courses(props) {
	const { courses, authors, onAddNewCourseClick } = props;
	const [filteredCourses, setFilteredCourses] = useState(courses);

	const coursesList = filteredCourses.map((course) => {
		const { title, description, creationDate, duration } = course;

		let parsedAuthors = '';

		course.authors.forEach((elem) => {
			parsedAuthors += authors.find((author) => author.id === elem).name + ', ';
		});

		return (
			<div key={course.id}>
				<CourseCard
					className='course-card'
					title={title}
					description={description}
					creationDate={creationDate}
					duration={parseDuration(duration)}
					authors={parsedAuthors.replace(/, *$/, '')}
				/>
			</div>
		);
	});

	return (
		<div>
			<div className='main-page__header'>
				<SearchBar courses={courses} setFilteredCourses={setFilteredCourses} />
				<Button
					text='Add new course'
					onClick={() => {
						onAddNewCourseClick();
					}}
				/>
			</div>
			{coursesList}
		</div>
	);
}

export default Courses;
