import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
	const [userName, setUserName] = useState('');
	const [isUserLogged, setIsUserLogged] = useState(false);

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
	const onLogin = (userName) => {
		setUserName(userName);
		setIsUserLogged(true);
	};
	const onLogOutHandler = () => {
		setIsUserLogged(false);
		setUserName('');
		localStorage.removeItem('token');
	};

	return (
		<div>
			<Header
				onLogoClick={LogoClickHandler}
				userName={userName}
				isUserLogged={isUserLogged}
				onLogOutHandler={onLogOutHandler}
			/>

			<div className='main-page'>
				<Routes>
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
					<Route path='/login' element={<Login onLogin={onLogin} />} />
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
