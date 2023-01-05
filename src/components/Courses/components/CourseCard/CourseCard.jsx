import { Button } from '../../../../common/Button/Button.jsx';
import './CourseCard.css';

function CourseCard(props) {
	const { title, description, authors, duration, creationDate } = props;

	return (
		<div className='course-card'>
			<div className='left-part'>
				<h2 className='card-title'>{title}</h2>
				<p className='card-description'>{description}</p>
			</div>
			<div className='right-part'>
				<div className='card-course-info'>
					<p className='card-authors'>
						<b>Authors: </b> {authors}
					</p>
					<p className='card-duration'>
						<b>Duration: </b> {duration}
					</p>
					<p className='card-creation-date'>
						<b>Created: </b> {creationDate}
					</p>
				</div>
				<Button text='Show course' />
			</div>
		</div>
	);
}

export default CourseCard;
