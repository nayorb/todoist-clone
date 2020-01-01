const initialState = {
	projects: [],
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FULL_SYNC_SUCCEEDED':
			console.log(payload)
			return {
				...state,
				projects: payload.projects,
			}
		default:
			return state
	}
}
