export const initAppAction = () => ({ type: 'FULL_SYNC_REQUESTED' })
export const toggleMenuAction = () => ({ type: 'TOGGLE_MENU' })
export const selectMenuItem = (type, id, item) => ({
	type: 'SELECT_MENU_ITEM',
	payload: { id, type, item },
})
