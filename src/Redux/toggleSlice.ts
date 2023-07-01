import { createSlice } from '@reduxjs/toolkit'

export interface ToggleState {
  isToggled: boolean
}

const initialState: ToggleState = {
  isToggled: false,
}

const toggleSlice = createSlice({
  name: 'toggleSlice',
  initialState,
  reducers: {
    toggle: state => {
      state.isToggled = !state.isToggled
    },
  },
})

export const { toggle } = toggleSlice.actions
export default toggleSlice.reducer
