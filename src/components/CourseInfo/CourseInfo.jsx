import './CourseInfo.css';
import { Link, useParams } from 'react-router-dom';
import { pipeDuration, findAuthorById } from '../../helpers';

export const CourseInfo = (props) => {
	const { courses, allAuthors } = props;
	let { courseId } = useParams();
	let foundCourse = courses.find((course) => course.id === courseId);
	const { title, description, id, duration, creationDate, authors } =
		foundCourse;

	let parsedAuthors = findAuthorById(authors, allAuthors);

	return (
		<div>
			<Link to='/courses'>{'< Back to courses'}</Link>
			<div className='course'>
				<h2 className='course__title'>{title}</h2>
				<div className='course__container'>
					<div className='course__description'>
						<p>{description}</p>
					</div>
					<div className='course__info'>
						<div>
							<p>
								<b>ID: </b> {id}
							</p>
							<p>
								<b>Duration: </b> {pipeDuration(duration)} hours
							</p>
							<p>
								<b>Created: </b> {creationDate}
							</p>
							<p>
								<b>Authors: </b> {parsedAuthors}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
