import { createSlice } from '@reduxjs/toolkit'

export interface userSliceType {
  user: string
  isLogged: boolean
}

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    isLogged: false
  },
  reducers: {
    changeUser(state2, {payload}){
      return { ...state2, isLogged: true, user: payload };
    },
    logout(state){
      return { ...state, isLogged: false, user: ''}
    }
  }
})

export const {changeUser, logout} = slice.actions

export const selectUser = (state: userSliceType) => state.user

export default slice.reducer
