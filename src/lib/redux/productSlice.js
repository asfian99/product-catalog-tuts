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
    search: (state, action) => {
      const keyword = action.payload;
      let allList = [...state.allList];

      const filteredProducts = allList.filter((item) => {
        return item.ProductId.includes(keyword) || item.Name.includes(keyword);
      });

      state.list = filteredProducts;
    },
    filterProduct: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProducts,
  addCategory,
  search,
  filterProduct,
} = productSlice.actions;

export default productSlice.reducer;
