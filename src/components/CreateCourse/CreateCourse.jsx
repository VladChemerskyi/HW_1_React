import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateCourse.css';

import { Button, Input, TextArea } from '../../common';
import { pipeDuration } from '../../helpers';
import {
	initialCourse,
	MIN_AUTHORS_NAME_LENGHT,
	MIN_COURSE_AUTHORS_SELECTED,
} from '../../constants';

const CreateCourse = (props) => {
	const { authors, onCreateCourseClick, onAuthorCreate } = props;

	const [newAuthor, setNewAuthor] = useState('');
	const [course, setCourse] = useState(initialCourse);

	const resetCourse = () => {
		setCourse(initialCourse);
	};
	const courseCreateHandler = () => {
		const isCourseValid =
			course.title &&
			course.description &&
			course.duration &&
			course.authors.length > MIN_COURSE_AUTHORS_SELECTED;

		if (isCourseValid) {
			onCreateCourseClick(course);
			resetCourse();
		} else {
			alert('Please, fill in all fields');
		}
	};

	const authorCreateHandler = () => {
		if (newAuthor.length > MIN_AUTHORS_NAME_LENGHT) {
			onAuthorCreate({ id: uuidv4(), name: newAuthor });
			setNewAuthor('');
		} else {
			alert(`Author's name has to be longer than 2 letters`);
		}
	};

	return (
		<div>
			<div>
				<div className='form__container'>
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
				<div className='authors__container'>
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
							.filter((author) => !course.authors.includes(author.id))
							.map((author) => {
								return (
									<li className='authors-list' key={author.id}>
										<div>
											<p>{author.name}</p>
											<Button
												text='Add author'
												onClick={() =>
													setCourse({
														...course,
														authors: [...course.authors, author.id],
													})
												}
											/>
										</div>
									</li>
								);
							})}
					</div>
				</div>

				<div className='course-authors__container'>
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

						{course.authors.length === MIN_COURSE_AUTHORS_SELECTED ? (
							<h3 className='authors-title'>Author list is empty</h3>
						) : (
							course.authors.map((courseAuthor) => {
								let auth = authors.find((author) => author.id === courseAuthor);
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
