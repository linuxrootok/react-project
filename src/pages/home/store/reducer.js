import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({list: [
	
]});

export default (state = defaultState, action) => {
	switch(action.type){

		case constants.GET_ARTICLES:
			console.log('准备设置axios获取到的数据');
			return state.set('list', action.value);
		
		default:
			return state;
	}
	return state;

}