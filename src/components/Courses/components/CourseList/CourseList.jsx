import { pipeDuration, findAuthorById } from '../../../../helpers';
import { CourseCard } from './CourseCard';

const CoursesList = (props) => {
	const { courses, authors } = props;

	return courses.map((course) => {
		const { title, description, creationDate, duration, id } = course;

		const parsedAuthors = findAuthorById(course.authors, authors);

		return (
			<div key={course.id}>
				<CourseCard
					title={title}
					description={description}
					creationDate={creationDate}
					duration={pipeDuration(duration)}
					authors={parsedAuthors}
					id={id}
				/>
			</div>
		);
	});
};

export { CoursesList };
