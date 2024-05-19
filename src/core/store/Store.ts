// *** Imports *** //
import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import AuthSlice from "./AuthSlice";

// *** Store *** //
const store = configureStore({
    reducer: { SearchSlice, AuthSlice },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
});

export default store;
