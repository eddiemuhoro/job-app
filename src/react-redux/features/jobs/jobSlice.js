import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jobService from './jobService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
    jobs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const createJob = createAsyncThunk('jobs/create',
async(jobData, thunkAPI)=>{
    try {

        const token =thunkAPI.getState().auth.user.token
        return await jobService.createJob(jobData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    
    }
})

export const getJob = createAsyncThunk('jobs/get',
async(_, thunkAPI)=>{
    try {

        const token =thunkAPI.getState().auth.user.token
        return await jobService.getJob(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteGoal = createAsyncThunk(
    'jobs/delete',
    async (id, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await jobService.deleteGoal(id, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const updateJob = createAsyncThunk(
    'jobs/delete',
    async (id,jobData, thunkAPI) => {
      try {
 
        return await jobService.updateJob(id,jobData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const jobSlice= createSlice({
    name: 'job',
    initialState,
    reducers: {
        reset: (state)=>initialState
    }, 
    extraReducers:(builder)=>{
        builder.addCase(createJob.pending, (state)=>{
            state.isLoading= true
        })
        .addCase(createJob.fulfilled, (state, action)=>{
            state.isLoading =false
            state.isSuccess = true
            //
            state.jobs.push(action.payload)
        })
        .addCase(createJob.rejected, (state, action)=>{
            state.isError =true
            state.isSuccess = false
            //
            state.message=(action.payload)
        })
        .addCase(deleteGoal.pending, (state) => {
            state.isLoading = true
          }
        )
        .addCase(deleteGoal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            //
            state.jobs = state.jobs.filter((job) => job._id !== action.payload._id)
          }
        )
        .addCase(deleteGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            //
            state.message = action.payload
          }
        )
        .addCase(getJob.pending, (state)=>{
            state.isLoading= true
        })
        .addCase(getJob.fulfilled, (state, action)=>{
            state.isLoading =false
            state.isSuccess = true
            //
            state.jobs=action.payload

        }
        )
        .addCase(getJob.rejected, (state, action)=>{
            state.isError =true
            state.isSuccess = false
            //
            state.message=(action.payload)
        }
        )
        

    }
})
export const {reset} = jobSlice.actions
export default jobSlice.reducer