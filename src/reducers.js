import * as constants from './constants';
import users from './stub';

const initialState = Immutable.fromJS({users});

export default function(state = initialState, action = {}) {

    switch(action.type) {
        default:
            return state;
    }
}