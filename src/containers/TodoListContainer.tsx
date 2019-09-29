import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { getVisibleTodos } from '../selectors'
import { Todo, TodoState } from 'src/store/todos/types';
import { deleteTodo, completeTodo, clearCompleted, editTodo } from '../store/todos/actions'

import TodoCard from '../components/TodoCard'
import Footer from '../components/Footer'

interface TodoListContainerProps {
    todoState: TodoState,
    deleteTodo: typeof deleteTodo,
    completeTodo: typeof completeTodo,
    clearCompleted: typeof clearCompleted,
    editTodo: typeof editTodo
    // filteredTodos: (args: any) => void
}

interface IState {
    completedTodos: Todo[];
    activeTodos: Todo[];
    isFiltered: boolean
}

class TodoListContainer extends React.Component<TodoListContainerProps, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            completedTodos: [],
            activeTodos: [],
            isFiltered: false
        };
    }

    filterTodo = (value: string) => {
    
        let allTodos = this.props.todoState.todos
        let completed = allTodos.filter(todo => todo.completed === true)
        let notCompleted = allTodos.filter(todo => todo.completed === false)        

        if(value === 'Active'){
            this.setState({
                completedTodos: [],
                activeTodos: notCompleted,
                isFiltered: true
            })
        }else if(value === 'Completed'){
            this.setState({
                completedTodos: completed,
                activeTodos: [],
                isFiltered: true
            })
        }else if( value === 'All'){
            this.setState({
                isFiltered: false
            })
        }
    }

    renderTodos = () => {
        let todoArr = this.props.todoState.todos
        if(this.state.isFiltered === true){
            if(this.state.completedTodos !== []){
                todoArr = this.state.completedTodos
            }else if(this.state.activeTodos !== [] ){
                todoArr = this.state.activeTodos
            }
        }
        return todoArr.map((todo) => 
        <TodoCard 
            todo={todo} key={todo.id} 
            edit 
            props={this.props} 
            deleteTodo={this.props.deleteTodo}
            completeTodo={this.props.completeTodo}
            editTodo={this.props.editTodo}
        />)
    }

    render(){
        console.log(this.props, 'filtered todos');
        
        let todoCards =  this.renderTodos()

        return(
        <div>
            <ul className="todo-list">{todoCards}</ul>
            <Footer
            clearCompleted={this.props.clearCompleted}
            />
        </div>)
    }
}

const mapStateToProps = (state: AppState) => ({
    todoState: state.todoState,
    filteredTodos: getVisibleTodos(state)
})


export default connect(mapStateToProps, { deleteTodo, completeTodo, clearCompleted, editTodo })(TodoListContainer)