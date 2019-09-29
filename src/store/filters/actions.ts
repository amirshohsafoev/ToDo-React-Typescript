import { SET_VISIBLITY } from './types'


export function setVisibilityFilter(filter: string) {
    return {
      type: SET_VISIBLITY,
      meta: {
          filter
      }
    };
  }