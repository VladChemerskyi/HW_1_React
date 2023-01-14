import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../common';
import './CourseCard.css';

const CourseCard = (props) => {
	const { title, description, authors, duration, creationDate, id } = props;
	const navigate = useNavigate();

	const showDetailsClickHandle = () => navigate(`/courses/${id}`);

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
				<Button text='Show course' onClick={showDetailsClickHandle} />
			</div>
		</div>
	);
};

export { CourseCard };
