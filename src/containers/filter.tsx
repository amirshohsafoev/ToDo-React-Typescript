import { getVisibleTodos } from '../selectors'
import { AppState } from '../store'
import { connect } from 'react-redux'

import TodoListContainer from './TodoListContainer'


const mapStateToProps = (state: AppState) => ({
    filteredTodos: getVisibleTodos(state)
})

export default connect(mapStateToProps, null)(TodoListContainer)
