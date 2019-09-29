import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../store/filters/types'
import { AppState } from '../store'

const getVisibilityFilter = (state: AppState) => state.visibility
const getTodos = (state: AppState) => state.todoState

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibility, todoState) => {
    switch (visibility) {
      case SHOW_ALL:
        return todoState.todos
      case SHOW_COMPLETED:
        return todoState.todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todoState.todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibility)
    }
  }
)

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todoState => (
    todoState.todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)