import todoist from '../todoist'

const initialState = {
  isMenuOpened: false,
  selectedMenuItem: {
    id: null,
    type: null,
    item: null,
  },
  app: todoist,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FULL_SYNC_SUCCEEDED':
      const inbox = payload.projects[0]
      return {
        ...state,
        selectedMenuItem: { type: 'project', item: { ...inbox }, id: inbox.id },
      }
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpened: !state.isMenuOpened,
      }
    case 'SELECT_MENU_ITEM':
      return {
        ...state,
        selectedMenuItem: { ...payload },
      }
    default:
      return state
  }
}
