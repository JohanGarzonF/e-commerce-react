import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
      setIsLoadingGLobal: (state, action) => action.payload
    }
})

export const { setIsLoadingGLobal } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
