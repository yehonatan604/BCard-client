// *** Imports *** //
import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

// *** Store *** //
const store = configureStore({
    reducer: { SearchSlice },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
});

export default store;
