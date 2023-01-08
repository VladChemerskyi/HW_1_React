import { pipeDuration } from '../../../../helpers';
import { CourseCard } from '../';

const CoursesList = (props) => {
	const { courses, search, authors } = props;

	const filteredCourses = courses.filter((course) =>
		course.title.toLowerCase().includes(search.toLowerCase())
	);

	return filteredCourses.map((course) => {
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
