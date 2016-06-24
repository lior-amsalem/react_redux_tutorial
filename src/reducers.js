import * as constants from './constants';
import users from './stub';

const initialState = Immutable.fromJS({users});

export default function(state = initialState, action = '') {
	switch(action.type) {
		case constants.INITIAL_DATA:
			state = state.set('users', Immutable.fromJS(action.users));

			return state;
		default:
			return state;
	}
}