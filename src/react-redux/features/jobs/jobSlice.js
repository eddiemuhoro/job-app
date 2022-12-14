import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
    jobs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const jobSlice= createSlice({
    name: 'job',
    initialState,
    reducers: {
        reset: (state)=>initialState
    }, 
    extraReducers:()=>{

    }
})

export const {reset} = jobSlice.actions
export default jobSlice.reducer