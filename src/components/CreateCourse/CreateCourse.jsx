import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateCourse.css';

import { Button, Input, TextArea } from '../../common';
import { pipeDuration } from '../../helpers';
import {
	INITIAL_COURSE,
	MIN_AUTHORS_NAME_LENGHT,
	MIN_COURSE_AUTHORS_SELECTED,
} from '../../constants';

const CreateCourse = (props) => {
	const { authors, onCourseCreate, onAuthorCreate } = props;

	const [newAuthor, setNewAuthor] = useState('');
	const [course, setCourse] = useState(INITIAL_COURSE);

	const resetCourse = () => {
		setCourse(INITIAL_COURSE);
	};
	const courseCreateHandler = () => {
		const isCourseValid =
			course.title &&
			course.description &&
			course.duration &&
			course.authors.length > MIN_COURSE_AUTHORS_SELECTED;

		if (isCourseValid) {
			onCourseCreate(course);
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
	const onTitleInputHandler = (title) => {
		setCourse({ ...course, title: title.target.value });
	};
	const onDescriptionInputHandler = (description) => {
		setCourse({ ...course, description: description.target.value });
	};
	const onAuthorNameInputHandler = (e) => setNewAuthor(e.target.value);
	const onDurationInputHandler = (e) => {
		setCourse({ ...course, duration: e.target.value });
	};

	return (
		<div>
			<div>
				<div className='form__container'>
					<div>
						<Input
							label='Title'
							value={course.title}
							onChange={onTitleInputHandler}
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
						onChange={onDescriptionInputHandler}
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
							onChange={onAuthorNameInputHandler}
						/>
						<Button text='Create author' onClick={authorCreateHandler} />
					</div>
					<div className='all-authors'>
						<h2 className='authors-title'>Authors</h2>
						{authors
							.filter((author) => !course.authors.includes(author.id))
							.map((author) => {
								const onAuthorAddHandler = () =>
									setCourse({
										...course,
										authors: [...course.authors, author.id],
									});

								return (
									<li className='authors-list' key={author.id}>
										<div>
											<p>{author.name}</p>
											<Button text='Add author' onClick={onAuthorAddHandler} />
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
							onChange={onDurationInputHandler}
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
								const onAuthorDeleteHandler = () =>
									setCourse({
										...course,
										authors: course.authors.filter(
											(authorID) => authorID !== auth.id
										),
									});

								return (
									<li className='authors-list' key={auth.id}>
										<div>
											<p>{auth.name}</p>
											<Button
												text='Delete author'
												onClick={onAuthorDeleteHandler}
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
