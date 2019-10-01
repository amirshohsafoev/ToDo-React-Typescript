import { SET_VISIBLITY, SHOW_ALL, VisiblityActionType } from './types'

export const visibilityFilter = (state = SHOW_ALL, action: VisiblityActionType ) => {
    
  switch (action.type) {
      case SET_VISIBLITY:
        return action.meta.filter
      default:
        return state
    }
  }

