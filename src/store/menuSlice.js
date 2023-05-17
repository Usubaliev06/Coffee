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
  deleteMenu: {
    status: null,
    error: null
  },
  createMenu: {
    status: null,
    error: null
  },
  editMenu: {
    status: null,
    error: null
  },
}

const deleteMenu = createAsyncThunk('deleteMenu', async (id) => {
  const response = await fetch(`${API}/menu/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error('err')
  return id
})

const editMenu = createAsyncThunk('editMenu', async ({data,id}) => {
  const response = await fetch(`${API}/menu/${id}/`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('err')
  return response.json()
})

const createMenu = createAsyncThunk('createMenu', async (data) => {
  const response = await fetch(`${API}/menu/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('err')
  return response.json()
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
  return data
}) 

const getDesert = createAsyncThunk('menu/getDesert', async () => {
  const response = await fetch(`${API}/menu/dessert`)
  const data = await response.json()
  return data
})

export const menuSlice = createSlice({
  name: 'menu',

  initialState,

  extraReducers: (builder) => {

    builder.addCase(editMenu.fulfilled, (state, action) => {
      state.create = action.payload
      state.editMenu.status = 'fulfilled'
      state.editMenu.error = null
    })
    builder.addCase(editMenu.pending, (state) => {
      state.create = null
      state.editMenu.status = 'pending'
      state.editMenu.error = null
    })
    builder.addCase(editMenu.rejected, (state, action) => {
      state.create = null
      state.editMenu.status = 'rejected'
      state.editMenu.error = action.payload
    })

    // //////////////////////////////////////////
    // //////////////////////////////////////////


    builder.addCase(createMenu.fulfilled, (state, action) => {
      state.menu.push(action.payload)
      state.createMenu.status = 'fulfilled'
      state.createMenu.error = null
    })
    builder.addCase(createMenu.pending, (state) => {
      state.createMenu.status = 'pending'
      state.createMenu.error = null
    })
    builder.addCase(createMenu.rejected, (state, action) => {
      state.createMenu.status = 'rejected'
      state.createMenu.error = action.payload
    })
    
    // //////////////////////////////////////////
    // //////////////////////////////////////////

    builder.addCase(deleteMenu.fulfilled, (state, action) => {
      state.menu = state.menu.filter((value) => value.id !== action.payload);
      // state.fastFood = state.fastFood.filter((value) =>
      state.deleteMenu.status = 'fulfilled';
      state.deleteMenu.error = null;
    })

    builder.addCase(deleteMenu.pending, (state) => {
      state.deleteMenu.status = 'pending'
      state.deleteMenu.error = null
    })
    builder.addCase(deleteMenu.rejected, (state, action) => {
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
  deleteMenu,
  createMenu,
  editMenu
}


export default menuSlice.reducer
