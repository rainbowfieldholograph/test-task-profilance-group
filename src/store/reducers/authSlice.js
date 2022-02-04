import { createSlice } from '@reduxjs/toolkit'
import { roles } from '../../helpers/roles'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    role: roles.unauthorized,
  },
  reducers: {
    authentication(state, action) {
      state.role = action.payload.role
      state.username = action.payload.username
    },
    logout(state, action) {
      state.role = roles.unauthorized
      state.username = ''
    },
  },
})

export const { authentication, logout } = authSlice.actions

export default authSlice.reducer
