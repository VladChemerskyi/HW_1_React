import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateCourse.css';

import { Button, Input, TextArea } from '../../common';
import { pipeDuration } from '../../helpers';
import { initialCourse } from '../../constants';

const CreateCourse = (props) => {
	const { authors, onCreateCourseClick, onAuthorCreate } = props;
	const [newAuthor, setNewAuthor] = useState('');
	const [course, setCourse] = useState(initialCourse);

	const courseCreateHandler = () => {
		if (
			course.title &&
			course.description &&
			course.duration &&
			course.authors.length > 0
		) {
			onCreateCourseClick(course);
			setCourse(initialCourse);
		} else {
			alert('Please, fill in all fields');
		}
	};

	const authorCreateHandler = () => {
		if (newAuthor.length > 2) {
			onAuthorCreate({ id: uuidv4(), name: newAuthor });
			setNewAuthor('');
		} else {
			alert(`Author's name has to be longer than 2 letters`);
		}
	};

	return (
		<div>
			<div>
				<div className='check'>
					<div>
						<Input
							label='Title'
							value={course.title}
							onChange={(title) => {
								setCourse({ ...course, title: title.target.value });
							}}
							placeHolderText='Enter title...'
						/>
					</div>
					<div>
						<Button text='Create course' onClick={courseCreateHandler} />
					</div>
				</div>
				<div className='description'>
					<TextArea
						label='Description:'
						value={course.description}
						onChange={(description) => {
							setCourse({ ...course, description: description.target.value });
						}}
						placeholder='Enter description...'
					/>
				</div>
			</div>
			<div className='authors-section'>
				<div className='one'>
					<div className='create-author'>
						<h2>Add author:</h2>
						<Input
							label='Author name'
							value={newAuthor}
							type='text'
							placeHolderText='Enter author name...'
							onChange={(e) => setNewAuthor(e.target.value)}
						/>
						<Button text='Create author' onClick={authorCreateHandler} />
					</div>
					<div className='all-authors'>
						<h2 className='authors-title'>Authors</h2>
						{authors
							.filter((el) => !course.authors.includes(el.id))
							.map((el) => {
								return (
									<li className='authors-list' key={el.id}>
										<div>
											<p>{el.name}</p>
											<Button
												text='Add author'
												onClick={() =>
													setCourse({
														...course,
														authors: [...course.authors, el.id],
													})
												}
											/>
										</div>
									</li>
								);
							})}
					</div>
				</div>

				<div className='two'>
					<div className='duration'>
						<Input
							label='Duration'
							type='number'
							placeHolderText='Enter duration in minutes'
							onChange={(e) => {
								setCourse({ ...course, duration: e.target.value });
							}}
							value={course.duration}
						/>
						<p>
							Duration: <b>{pipeDuration(course.duration)}</b> hours
						</p>
					</div>
					<div className='course-authors'>
						<h2 className='authors-title'>Course authors</h2>

						{course.authors.length === 0 ? (
							<h3 className='authors-title'>Author list is empty</h3>
						) : (
							course.authors.map((el) => {
								let auth = authors.find((author) => author.id === el);
								return (
									<li className='authors-list' key={auth.id}>
										<div>
											<p>{auth.name}</p>
											<Button
												text='Delete author'
												onClick={() =>
													setCourse({
														...course,
														authors: course.authors.filter(
															(authorID) => authorID !== auth.id
														),
													})
												}
											/>
										</div>
									</li>
								);
							})
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { CreateCourse };
