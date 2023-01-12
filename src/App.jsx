import { useState } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';

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
	const navi = useNavigate();

	const LogoClickHandler = () => navi('/');
	const onNewCourseAddClickHandler = () => navi('/createcourse');
	const onCourseCreateHandler = (newCourse) => {
		setCourses((courses) => [...courses, newCourse]);
		navi('/');
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
							<Courses
								authors={authors}
								courses={courses}
								onNewCourseAdd={onNewCourseAddClickHandler}
							/>
						}
					/>
					<Route
						path='/createcourse'
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
					<Route path='/courseinfo' element={<CourseInfo />} />{' '}
				</Routes>
			</div>
		</div>
	);
};

export default App;
