import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from './reducers/MovieSlice'
import TvReducer from './reducers/TvSlice'
import PersonReducer from './reducers/PersonSlice'

export default configureStore({
  reducer: {
    movie : MovieReducer,
    tv:TvReducer,
    person:PersonReducer
  }
})