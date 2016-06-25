import * as constants from './constants';

/**
 * - Action is an object that describe the changes we want to see.
 * - Most of the time the action is exposed from the container
 */
export function add(name, age) { // add family_name here
    return {
        type: constants.ADD,
        name: name,
        age: age
    }
}