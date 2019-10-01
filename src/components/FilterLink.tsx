import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/filters/actions'
import { AppState } from '../store';
import Link from './Link' 

const mapStateToProps = (state: AppState, ownProps: any) => ({
    active: ownProps.filter === state.visibility
  })
  
  const mapDispatchToProps = (dispatch: any, ownProps: Object) => ({
    setFilter: (test: string) => {
      dispatch(setVisibilityFilter(test))
    // console.log(typeof ownProps.children, 'OWN PROPS');
    
    }
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)
  
