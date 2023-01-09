import { useState } from 'react';
import './App.css';

import { Header, Courses, CreateCourse } from './components';
import { MOCKED_AUTHORS_LIST, MOCKED_COURSES_LIST, PAGES } from './constants';

const App = () => {
	const [authors, setAuthors] = useState(MOCKED_AUTHORS_LIST);
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);
	const [selectedPage, setSelectedPage] = useState(PAGES.courses);

	const onLogoClickHandler = () => setSelectedPage(PAGES.courses);
	const onNewCourseAddClickHandler = () => setSelectedPage(PAGES.createCourse);
	const onCourseCreateHandler = (newCourse) => {
		setCourses((courses) => [...courses, newCourse]);
		setSelectedPage(PAGES.courses);
	};
	const onAuthorCreateHandler = (author) => {
		setAuthors((authors) => [...authors, author]);
	};

	return (
		<div>
			<Header onLogoClick={onLogoClickHandler} />
			<div className='main-page'>
				{selectedPage === PAGES.courses && (
					<Courses
						authors={authors}
						courses={courses}
						onNewCourseAdd={onNewCourseAddClickHandler}
					/>
				)}

				{selectedPage === PAGES.createCourse && (
					<CreateCourse
						authors={authors}
						onCourseCreate={onCourseCreateHandler}
						onAuthorCreate={onAuthorCreateHandler}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
