import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from "./API"

const initialState = {
  menu: null,
  getMenu: {
    status: null,
    error: null
  },
  coffee: null,
  getCoffee: {
    status: null,
    error: null
  },
  fastFood: null,
  getFastFood: {
    status: null,
    error: null
  },
  desert: null,
  getDesert: {
    status: null,
    error: null
  },
  deleteMenuId: null,
  deleteMenu: {
    status: null,
    error: null
  },
}

const deleteMenu = createAsyncThunk('deleteMenu', async (id, thunkApi) => {
  try {
    const response = await fetch(`${API}/menu/${id}`,{
      method: 'DELETE',
    })
     await response.json()
  } catch(e) {
    thunkApi.rejectWithValue('error')
  }
  // console.log(id)

})


const getMenu = createAsyncThunk('menu', async () => {
  const response = await fetch(`${API}/menu`)
  const data = await response.json()
  return data
})

const getCoffee = createAsyncThunk('menu/getCoffe', async () => {
  const response = await fetch(`${API}/menu/coffee`)
  const data = await response.json()
  return data
})

const getFastFood = createAsyncThunk('menu/getFastFood', async () => {
  const response = await fetch(`${API}/menu/fast-food`)
  const data = await response.json()
  if (!response.ok) throw new Error('err')
  // console.log(11, data)
  return data
})

const getDesert = createAsyncThunk('menu/getDesert', async () => {
  const response = await fetch(`${API}/category`)
  const data = await response.json()
  return data
})

export const menuSlice = createSlice({
  name: 'menu',

  initialState,

  extraReducers: (builder) => {


    builder.addCase(deleteMenu.fulfilled, (state, action) => {
      console.log(action.payload)
      state.menu = state.menu.filter((value) => value.id !== action.payload)
      state.deleteMenu.status = 'fulfilled'
      state.deleteMenu.error = null
    })
    builder.addCase(deleteMenu.pending, (state) => {
      state.menu = null
      state.deleteMenu.status = 'pending'
      state.deleteMenu.error = null
    })
    builder.addCase(deleteMenu.rejected, (state, action) => {
      state.menu = null
      state.deleteMenu.status = 'rejected'
      state.deleteMenu.error = action.payload
    })

    // //////////////////////////////////////////
    // //////////////////////////////////////////


    builder.addCase(getMenu.fulfilled, (state, action) => {
      state.menu = action.payload
      state.getMenu.status = 'fulfilled'
      state.getMenu.error = null
    })
    builder.addCase(getMenu.pending, (state) => {
      state.menu = null
      state.getMenu.status = 'pending'
      state.getMenu.error = null
    })
    builder.addCase(getMenu.rejected, (state, action) => {
      state.menu = null
      state.getMenu.status = 'rejected'
      state.getMenu.error = action.payload
    })

    // //////////////////////////////////////////

    builder.addCase(getCoffee.fulfilled, (state, action) => {
      state.coffee = action.payload
      state.getCoffee.status = 'fulfilled'
      state.getCoffee.error = null
    })
    builder.addCase(getCoffee.pending, (state) => {
      state.coffee = null
      state.getCoffee.status = 'pending'
      state.getCoffee.error = null
    })
    builder.addCase(getCoffee.rejected, (state, action) => {
      state.coffee = null
      state.getCoffee.status = 'rejected'
      state.getCoffee.error = action.payload
    })
    // //////////////////////////////////////////


    builder.addCase(getFastFood.fulfilled, (state, action) => {
      // console.log(22,action)
      state.fastFood = action.payload
      state.getFastFood.status = 'fulfilled'
      state.getFastFood.error = null
    })
    builder.addCase(getFastFood.pending, (state) => {
      state.fastFood = null
      state.getFastFood.status = 'pending'
      state.getFastFood.error = null
    })
    builder.addCase(getFastFood.rejected, (state, action) => {
      state.fastFood = null
      state.getFastFood.status = 'rejected'
      state.getFastFood.error = action.payload
    })

    // //////////////////////////////////////////

    builder.addCase(getDesert.fulfilled, (state, action) => {
      state.desert = action.payload
      state.getDesert.status = 'fulfilled'
      state.getDesert.error = null
    })
    builder.addCase(getDesert.pending, (state) => {
      state.desert = null
      state.getDesert.status = 'pending'
      state.getDesert.error = null
    })
    builder.addCase(getDesert.rejected, (state, action) => {
      state.desert = null
      state.getDesert.status = 'rejected'
      state.getDesert.error = action.payload
    })
  },

})

export const menuActions = {
  getMenu,
  getCoffee,
  getFastFood,
  getDesert,
  deleteMenu
}

export default menuSlice.reducer
