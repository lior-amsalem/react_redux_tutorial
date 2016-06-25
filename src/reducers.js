import * as constants from './constants';
import users from './stub';

const initialState = Immutable.fromJS({users});

export default function(state = initialState, action = {}) {

    switch(action.type) {
        case constants.ADD:
            let newUser = Immutable.fromJS({name: action.name, family_name: action.family_name, age: action.age});

            state = state.updateIn(['users', 'list'], arr => arr.push(newUser));

            return state;
        case constants.REMOVE:

            state = state.deleteIn(['users', 'list', action.index])

            return state;
        default:
            return state;
    }
}