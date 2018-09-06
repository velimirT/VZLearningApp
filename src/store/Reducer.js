import C from './Constants';

export const MainReducer = (state = {}, action) => {
	switch (action.type){
		case C.ADD_TO_COMPARE:
			return (
				{
					...state, 
					toCompare: {...state.toCompare.push(action.id)}
				}
			)
		default: 
			return state;
	}
}