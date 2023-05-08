import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './API'


const initialState = {
  data: null,
  getData: {
    status: null,
    error: null
  }
}

const getData = createAsyncThunk('staff/getData', async () => {
  const response = await fetch(`${API}/staff`)
  const data = await response.json()
  return data
})

export const staffSlice = createSlice({
  name: 'staff',

  initialState,

  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
      state.getData.status = 'fulfilled'
      state.getData.error = null
    })
    builder.addCase(getData.pending, (state) => {
      state.data = null
      state.getData.status = 'pending'
      state.getData.error = null
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.data = null
      state.getData.status = 'rejected'
      state.getData.error = action.payload
    })
  },

})

export const staffActions = {
  getData
}

export default staffSlice.reducer
