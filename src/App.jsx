import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';

import { mockedAuthorsList, mockedCoursesList } from './constants.js';

const pages = {
	courses: 'Courses',
	createCourse: 'CreateCourse',
};

function App() {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [selectedPage, setSelectedPage] = useState(pages.courses);

	return (
		<div>
			<Header onLogoClick={() => setSelectedPage(pages.courses)} />
			<div className='main-page'>
				{selectedPage === pages.courses && (
					<Courses
						authors={authors}
						courses={courses}
						onAddNewCourseClick={() => {
							setSelectedPage(pages.createCourse);
						}}
					/>
				)}
				{selectedPage === pages.createCourse && (
					<CreateCourse
						authors={authors}
						onCreateCourseClick={(newCourse) => {
							setCourses((courses) => [...courses, newCourse]);
							setSelectedPage(pages.courses);
						}}
						onAuthorCreate={(author) => {
							setAuthors((authors) => [...authors, author]);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
