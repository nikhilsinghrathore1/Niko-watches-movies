import { createSlice } from '@reduxjs/toolkit'
const initialState =  { 
               info:null
}

export const MovieSlice = createSlice({
  name: 'MovieSlice',
  initialState,
  reducers: {
               loadMovie:(state , action)=>{
                              state.info = action.payload;
               },
               removeMovie :(state , action)=>{
                              state.info = null;
               }
  }
})

export const {loadMovie , removeMovie } = MovieSlice.actions

export default MovieSlice.reducer