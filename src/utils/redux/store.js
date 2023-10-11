import { configureStore } from '@reduxjs/toolkit'
import formulaReducer     from './features/formulaSlice.js'

export const store = configureStore({
  reducer: {
    formula: formulaReducer
  },
})