import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = { updatingValue: '' }

const updatingValueSlice = createSlice({
  name: 'updatingValueSlice',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<string>) => {
      state.updatingValue = action.payload
    },
  },
  selectors: {
    selectUpdatingValue: (state) => state.updatingValue,
  },
})

export const { selectUpdatingValue } = updatingValueSlice.selectors
export const { updateValue } = updatingValueSlice.actions
export const updatingValueReducer = updatingValueSlice.reducer
