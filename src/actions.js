import * as constants from './constants';

/**
 * - Action is an object that describe the changes we want to see.
 * - Most of the time the action is exposed from the container
 */
export function initialData(data) {
	return {
		type: constants.INITIAL_DATA,
		team: team
	}
}