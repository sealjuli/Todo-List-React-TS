import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = { value: '' }

const enterValueSlice = createSlice({
  name: 'enterValueSlice',
  initialState,
  reducers: {
    updateEnterValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
  selectors: {
    selectEnterValue: (state) => state.value,
  },
})

export const { selectEnterValue } = enterValueSlice.selectors
export const { updateEnterValue } = enterValueSlice.actions
export const enterValueReducer = enterValueSlice.reducer
