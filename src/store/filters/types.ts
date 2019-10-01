
export const SET_VISIBLITY = 'SET_VISIBLITY'
export const SHOW_ALL = 'All'
export const SHOW_COMPLETED = 'Completed'
export const SHOW_ACTIVE = 'Active'

interface SetVisiblity {
    type: typeof SET_VISIBLITY
    meta: {
        filter: string
    }
}

export type VisiblityActionType = SetVisiblity