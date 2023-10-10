import { configureStore } from '@reduxjs/toolkit'
import tagReducer         from './features/tagSlice.js'
import formulaReducer     from './features/formulaSlice.js'

export const store = configureStore({
  reducer: {
    tag: tagReducer,
    formula: formulaReducer
  },
})