
export const SET_VISIBLITY = 'SET_VISIBLITY'
export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

interface SetVisiblity {
    type: typeof SET_VISIBLITY
    meta: {
        filter: string
    }
}

export type VisiblityActionType = SetVisiblity