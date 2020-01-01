const initialState = {
	isMenuOpened: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'TOGGLE_MENU':
			return {
				...state,
				isMenuOpened: !state.isMenuOpened,
			}
		default:
			return state
	}
}
