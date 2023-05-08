import { configureStore } from '@reduxjs/toolkit'
import staffReduser from './staffSlice'
import menuReduser from './menuSlice'
import authReduser from './authSlice'



export const store = configureStore({
  reducer: {
    staff: staffReduser,
    menu: menuReduser,
    auth: authReduser
  },
})
