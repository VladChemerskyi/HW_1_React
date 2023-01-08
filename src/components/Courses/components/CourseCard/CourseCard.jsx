import { Button } from '../../../../common';
import './CourseCard.css';

function CourseCard(props) {
	const { title, description, authors, duration, creationDate } = props;

	return (
		<div className='course-card'>
			<div className='course-card__description'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='course-card__info'>
				<div>
					<p>
						<b>Authors: </b> {authors}
					</p>
					<p>
						<b>Duration: </b> {duration}
					</p>
					<p>
						<b>Created: </b> {creationDate}
					</p>
				</div>
				<Button text='Show course' />
			</div>
		</div>
	);
}

export { CourseCard };
