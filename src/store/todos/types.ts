export interface Todo {
    text: string
    completed: boolean
    id: number
  }
  
  export interface TodoState {
    todos: Todo[]
  }
  
  export const ADD_TODO = 'ADD_TODO'
  export const DELETE_TODO = 'DELETE_TODO'
  export const EDIT_TODO = 'EDIT_TODO'
  
  interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
  }
  
  interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    meta: {
      id: number;
    };
  }
  
  interface EditTodoAction {
    type: typeof EDIT_TODO;
    payload: {
        text: string
        completed: boolean
        id: number
    };
  }
  
//   interface AddToFavoritesAction {
//     type: typeof ADD_TO_FAVORITES;
//     meta: {
//       id: number;
//     };
//   }
  
//   interface FilterItemAction {
//     type: typeof FILTER_ITEMS;
//     meta: {
//       category: string;
//     };
//   }
  
  export type TodoActionTypes = AddTodoAction | DeleteTodoAction | EditTodoAction 
  



// export const COMPLETE_TODO = 'COMPLETE_TODO'
// export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
// export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
