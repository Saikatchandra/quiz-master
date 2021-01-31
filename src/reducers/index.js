import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import scoreReducer from './scoreReducer'

export default combineReducers({
    updated_score: scoreReducer,
});