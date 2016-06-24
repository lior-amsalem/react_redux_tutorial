const storeThunk = Redux.compose(
	Redux.applyMiddleware(ReduxThunk.default)
)(Redux.createStore);

const configureStore = function configureStore(rootReducer, initialState) {
	const store = storeThunk(rootReducer, initialState
						,typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
					);

	return store;
}

module.exports = { configureStore };