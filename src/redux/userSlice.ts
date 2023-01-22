import {createSlice} from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
    },
    reducers: {
      changeUser(state, {payload}) {
        return {...state, userName: payload}
      },
    },
  })

  export const {changeUser} = slice.actions

  export default slice.reducer