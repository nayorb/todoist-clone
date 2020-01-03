const initialState = []

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FULL_SYNC_SUCCEEDED':
			return payload.sections
		default:
			return state
	}
}
