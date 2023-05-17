import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './API'


const initialState = {
  data: null,
  getData: {
    status: null,
    error: null
  },
  deleteData: {
    status: null,
    error: null
  },
  createData: {
    status: null,
    error: null
  },
  editData: {
    status: null,
    error: null
  },
}

const getData = createAsyncThunk('staff/getData', async () => {
  const response = await fetch(`${API}/staff`)
  const data = await response.json()
  return data
})

const deleteData = createAsyncThunk('deleteData', async (id) => {
  const response = await fetch(`${API}/staff/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('err')
  return id
})

const editData = createAsyncThunk('editData', async ({data,id}) => {
  const response = await fetch(`${API}/staff/${id}/`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('err')
  return response.json()
})

const createData = createAsyncThunk('createData', async (data) => {
  const response = await fetch(`${API}/staff/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('err')
  return response.json()
})

export const staffSlice = createSlice({
  name: 'staff',

  initialState,

  extraReducers: (builder) => {

    
    builder.addCase(editData.fulfilled, (state, action) => {
      state.create = action.payload
      state.editData.status = 'fulfilled'
      state.editData.error = null
    })
    builder.addCase(editData.pending, (state) => {
      state.create = null
      state.editData.status = 'pending'
      state.editData.error = null
    })
    builder.addCase(editData.rejected, (state, action) => {
      state.create = null
      state.editData.status = 'rejected'
      state.editData.error = action.payload
    })

    // //////////////////////////////////////////
    // //////////////////////////////////////////


    builder.addCase(createData.fulfilled, (state, action) => {
      state.data.push(action.payload)
      state.createData.status = 'fulfilled'
      state.createData.error = null
    })
    builder.addCase(createData.pending, (state) => {
      state.createData.status = 'pending'
      state.createData.error = null
    })
    builder.addCase(createData.rejected, (state, action) => {
      state.createData.status = 'rejected'
      state.createData.error = action.payload
    })

    // //////////////////////////////////////

    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.data = state.data.filter((value) => value.id !== action.payload);
      // state.fastFood = state.fastFood.filter((value) =>
      state.deleteData.status = 'fulfilled';
      state.deleteData.error = null;
    })
    builder.addCase(deleteData.pending, (state) => {
      state.deleteData.status = 'pending'
      state.deleteData.error = null
    })
    builder.addCase(deleteData.rejected, (state, action) => {
      state.deleteData.status = 'rejected'
      state.deleteData.error = action.payload
    })

    // /////////////////////////////////////////////////

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
  getData,
  deleteData,
  createData,
  editData
}

export default staffSlice.reducer
