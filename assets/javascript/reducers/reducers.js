import {combineReducers} from 'redux';
import LikeUnlikeReducers from './simpleReducers.js'
const allReducers = combineReducers({
	likeUnlike: LikeUnlikeReducers
});
export default allReducers;