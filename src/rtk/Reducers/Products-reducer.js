import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("Products/fetchData", async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
});
export const productSlice = createSlice({
  name: "Products",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
