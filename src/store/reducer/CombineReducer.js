
import { combineReducers } from 'redux'
import AppReducer from './appReducer';

export default combineReducers({
    app: AppReducer,
})