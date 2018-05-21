import{SELECT_CARD} from './store/store-actions'
import { connect } from 'react-redux';
import App from './App'


const mapStateToProps = state => {
  return {
    state : {
      selectedCard: state.selectedCard,
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCard: card => {
      dispatch({
        type: SELECT_CARD,
        payload: card, 
      })
    }
  }
}

const container = connect(mapStateToProps, mapDispatchToProps)(App);

export default container;