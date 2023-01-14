export const findAuthorById = (allAuthors, currentAuthors) => {
	return allAuthors
		.map(
			(authorID) => currentAuthors.find((author) => author.id === authorID).name
		)
		.join(', ');
};
