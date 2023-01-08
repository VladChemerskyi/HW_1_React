import { useState } from 'react';
import './App.css';

import { Header, Courses, CreateCourse } from './components';
import { mockedAuthorsList, mockedCoursesList, pages } from './constants.js';

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
