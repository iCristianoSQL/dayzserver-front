import {createSlice} from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        isLogged: false,
    },
    reducers: {
      changeUser(state, {payload}) {
          console.log(typeof state)
        return {...state, isLogged: true, userName: payload}
      },
      logout(state) {
        return {...state, isLogged: false, user: ''}
      }
    },
  })

  export const {changeUser, logout} = slice.actions

  export const selectUser = (state: any) => state.user

  export default slice.reducer