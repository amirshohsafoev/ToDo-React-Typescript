import * as React from "react"
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../store/filters/types'
import  FilterLink  from './FilterLink'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer: React.SFC<any> = (props) => {
    let { clearCompleted } = props
    
 return (
     <footer className="footer">
        <span className="todo-count">
        {/* <strong>{'Many' || 'No'}</strong>  todos left */}
        </span>
        <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              { filter }
            </FilterLink>
          </li>
        )}
      </ul>
        <button
          className="clear-completed"
          onClick={()=> clearCompleted()}
        >Clear completed</button>
    </footer>
  )
}

export default Footer


