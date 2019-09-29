export interface Todo {
    text: string
    completed: boolean
    id: number
  }
  
  export interface TodoState {
    todos: Todo[],
    filteredTodos: Todo[],
    isFiltered: boolean
  }
  
  export const ADD_TODO = 'ADD_TODO'
  export const DELETE_TODO = 'DELETE_TODO'
  export const EDIT_TODO = 'EDIT_TODO'
  export const FILTER_TODOS = 'FILTER_TODOS'
  export const COMPLETE_TODO = 'COMPLETE_TODO'
  export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
  
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
    meta: {
        text: string
        id: number
    };
  }

  interface CompleteTodo {
    type: typeof COMPLETE_TODO;
    meta: {
      id: number;
    };
  }

  interface ClearCompleted {
    type: typeof CLEAR_COMPLETED
    // meta: {
    //   completed: boolean
    // }
  }

  interface FilterTodoAction {
    type: typeof FILTER_TODOS;
    meta: {
      completed: boolean;
    };
  }

  export type TodoActionTypes = AddTodoAction | DeleteTodoAction | EditTodoAction | CompleteTodo | ClearCompleted | FilterTodoAction
  
