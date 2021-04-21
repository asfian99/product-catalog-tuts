import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    allList: [],
    list: [],
    category: [],
    printItems: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.allList.push(action.payload);
      state.list.push(action.payload);
    },
    addCategory: (state, action) => {
      let arr = state.category;

      arr.push(action.payload);
      const uniqueArr = [...new Set(arr)];

      state.category = uniqueArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, addCategory } = productSlice.actions;

export default productSlice.reducer;
