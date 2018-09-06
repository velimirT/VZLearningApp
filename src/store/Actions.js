import C from './Constants';
import fetch from 'isomorphic-fetch';

export const addToCompare = (id) => 
	({
		type: C.ADD_TO_COMPARE,
		id
	})

export const removeFromCompare = (id) => 
	({
		type: C.REMOVE_FROM_COMPARE,
	})
