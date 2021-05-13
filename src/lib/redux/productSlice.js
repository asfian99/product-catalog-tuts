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
    filterPrice: (state, action) => {
      const { min, max } = action.payload;

      let allList = [...state.allList];
      const filteredProducts = allList.filter((item) => {
        // xx,xxxx => xxxxxx
        const price = parseFloat(item.Price.replace(',', ''));

        return price >= min && price <= max;
      });

      state.list = filteredProducts;
    },
    addToPrint: (state, action) => {
      const allList = [...state.allList];
      const product = action.payload;

      const index = allList.findIndex(
        (item) => item.ProductId === product.ProductId
      );
      allList[index].selected = true;

      state.allList = allList;
      state.printItems.push(product);
    },
    removeFromPrint: (state, action) => {
      const allList = [...state.allList];
      const product = action.payload;

      const index = allList.findIndex(
        (item) => item.ProductId === product.ProductId
      );
      allList[index].selected = false;

      const newPrintList = state.printItems.filter(
        (item) => item.ProductId !== product.ProductId
      );

      state.allList = allList;
      state.printItems = newPrintList;
    },
    ClearPrintList: (state, action) => {
      const allList = [...state.allList];

      allList.forEach((item) => (item.selected = false));

      state.allList = allList;
      state.printItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProducts,
  addCategory,
  search,
  filterProduct,
  filterPrice,
  addToPrint,
  removeFromPrint,
  ClearPrintList,
} = productSlice.actions;

export default productSlice.reducer;
