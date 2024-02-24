import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies:null,
        trailorVideo: null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailorVideo: (state,action) => {
            state.trailorVideo = action.payload;
        }

    }
})
export const{addNowPlayingMovies,addTrailorVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer;