import { createSlice } from '@reduxjs/toolkit'

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    value: [
      {text: "manzana", value: 20},
      {text: "pera",    value: 30},
      {text: "sandia",  value: 50},
    ]
  },
  reducers: {
    addTag: (state, { payload }) => {
      state.value.push(payload)
    },
    deleteTag: (state, { payload }) => {
      state.value.splice(payload)
    }
  }
})

export default tagSlice.reducer

export const { addTag, deleteTag } = tagSlice.actions