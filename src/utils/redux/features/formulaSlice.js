import { createSlice }  from '@reduxjs/toolkit'
import Formulas         from '../../../utils/formulas.js'


const formulaSlice = createSlice({
  name: "formula",
  initialState: {
    value: [
      {
        name: "MRR - Dashboard",
        value: 0.00,
        tags: [
          {
            text: "ROUND",
            value: Formulas.ROUND,
            type: "function"
          }
        ],
      },
      {
        name: "New Costumer Count - Dashboard",
        value: 3,
        tags: null,
      },
      {
        name: "Churned Customer Count - Dashboard",
        value: -1,
        tags: null,
      },
      {
        name: "Existing Customer Count - Dashboard",
        value: 1,
        tags: null,
      },
      {
        name: "Churn Rate",
        value: 0,
        tags: null,
      },
      {
        name: "ARR",
        value: 0.00,
        tags: null,
      },
      {
        name: "Monthly ACV",
        value: 0.00,
        tags: null,
      },
      {
        name: "Customer LTV",
        value: 0.00,
        tags: null,
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