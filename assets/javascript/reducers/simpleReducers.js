let likeCount = 0;
export default function(state = null, action){
	switch (action.type) {
		case 'BUTTON_PRESS':
			likeCount += action.payload;
			return likeCount;
			break
	}
	return likeCount;
}