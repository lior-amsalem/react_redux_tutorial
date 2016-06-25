import * as constants from './constants';
import users from './stub';

const initialState = Immutable.fromJS({users});

export default function(state = initialState, action = '') {
	switch(action.type) {
		case constants.ADD:
			let newUser = Immutable.fromJS({name: action.name, age: action.age});

			state = state.updateIn(['users', 'list'], arr => arr.push(newUser));

			return state;
		default:
			return state;
	}
}