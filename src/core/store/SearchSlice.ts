import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ''
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload;
        }
    }
});

export const searchActions = SearchSlice.actions;
export default SearchSlice.reducer;
