import { createSlice } from '@reduxjs/toolkit'

const formulaSlice = createSlice({
  name: "formula",
  initialState: {
    value: [
      {
        name: "MRR - Dashboard",
        value: 0.00,
        formula: null,
      },
      {
        name: "New Costumer Count - Dashboard",
        value: 3,
        formula: null,
      },
      {
        name: "Churned Customer Count - Dashboard",
        value: -1,
        formula: null,
      },
      {
        name: "Existing Customer Count - Dashboard",
        value: 1,
        formula: null,
      },
      {
        name: "Churn Rate",
        value: 0,
        formula: null,
      },
      {
        name: "ARR",
        value: 0.00,
        formula: null,
      },
      {
        name: "Monthly ACV",
        value: 0.00,
        formula: null,
      },
      {
        name: "Customer LTV",
        value: 0.00,
        formula: null,
      },
    ]
  },
  reducers: {
    setFormula: (state, { payload }) => {
      state.value.push(payload)
    },
    setFormulaColumn: (state, { payload }) => {
      state.value[payload.index] = { ...state.value, [payload.key]: payload.value }
    }
  }
})

export default formulaSlice.reducer

export const { setFormula, setFormulaColumn } = formulaSlice.actions