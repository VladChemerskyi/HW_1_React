import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import {
	Header,
	Courses,
	CreateCourse,
	Login,
	CourseInfo,
	Registration,
} from './components';

import { MOCKED_AUTHORS_LIST, MOCKED_COURSES_LIST } from './constants';

const App = () => {
	const [authors, setAuthors] = useState(MOCKED_AUTHORS_LIST);
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);

	const navigate = useNavigate();

	const LogoClickHandler = () => navigate('/courses');

	const onNewCourseAddClickHandler = () => navigate('/courses/add');

	const onCourseCreateHandler = (newCourse) => {
		setCourses((courses) => [...courses, newCourse]);
		navigate('/courses');
	};
	const onAuthorCreateHandler = (author) => {
		setAuthors((authors) => [...authors, author]);
	};

	return (
		<div>
			<Header onLogoClick={LogoClickHandler} />

			<div className='main-page'>
				<Routes>
					<Route
						path='/'
						element={
							localStorage.getItem('token') ? (
								<Navigate to='/courses' />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/courses'
						element={
							<Courses
								authors={authors}
								courses={courses}
								onNewCourseAdd={onNewCourseAddClickHandler}
							/>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								authors={authors}
								onCourseCreate={onCourseCreateHandler}
								onAuthorCreate={onAuthorCreateHandler}
							/>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Registration />} />
					<Route
						path='/courses/:courseId'
						element={<CourseInfo courses={courses} allAuthors={authors} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
