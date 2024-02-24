import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        movieNames:null,
        movieResults:null,

    },
    reducers:{
        toggleGptSearchView:(state) =>{
            state.showGptSearch = !state.showGptSearch; 
        },
        addGptMoviesResult:(state,action) =>{
            const {movieNames, movieResult} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResult;
            
        }
    }
})

export const{toggleGptSearchView,addGptMoviesResult} = gptSlice.actions

export default gptSlice.reducer;