/**
 * @description Converts a string to 'Title Case'
 * @param {String} str to convert
 */
function toTitleCase (str) {
return str
.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
.map(x => x.charAt(0).toUpperCase() + x.slice(1))
.join(' ');
};

/**
 * @description Converts a string to 'CamelCase'
 * @param {String} str to convert
 */
function toCamelCase(str) {
	const s =
		str &&
		str
			.match(
				/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
			)
			.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
			.join('');
	return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * @description Converts a string to 'SnakeCase'
 * @param {String} str to convert
 */
function toSnakeCase (str) {
	return str &&
		str
			.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
			.map(x => x.toLowerCase())
			.join('_');
}

/**
 * @description Converts a string to 'KebabCase'
 * @param {String} str to convert
 */
function toKebabCase(str) {
	return str &&
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map(x => x.toLowerCase())
		.join('-');

}

export {
	toCamelCase,
	toSnakeCase,
	toKebabCase,
	toTitleCase,
}
