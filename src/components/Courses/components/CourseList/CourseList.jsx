import { pipeDuration } from '../../../../helpers';
import { CourseCard } from './CourseCard';

const CoursesList = (props) => {
	const { courses, authors } = props;

	return courses.map((course) => {
		const { title, description, creationDate, duration } = course;

		const parsedAuthors = course.authors
			.map((authorID) => authors.find((author) => author.id === authorID).name)
			.join(', ');

		return (
			<div key={course.id}>
				<CourseCard
					title={title}
					description={description}
					creationDate={creationDate}
					duration={pipeDuration(duration)}
					authors={parsedAuthors}
				/>
			</div>
		);
	});
};

export { CoursesList };
