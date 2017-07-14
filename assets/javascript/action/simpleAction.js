export const buttonClick = (value) => {
	console.log("You value is  ", value);
	return {
		type: 'BUTTON_PRESS',
		payload: value
	}
};