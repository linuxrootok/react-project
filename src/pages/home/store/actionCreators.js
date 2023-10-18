import * as constants from './constants';


export const getArticles = (val) => ({
	type: constants.GET_ARTICLES,
	value: val
});
