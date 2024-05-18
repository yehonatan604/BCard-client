import { createSlice } from "@reduxjs/toolkit"

export enum AuthLevels {
    Guest = 0,
    User = 1,
    Biz = 2,
    Admin = 3
}

const initialState = {
    isLoggedIn: false,
    id: '',
    authLevel: AuthLevels.Guest
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload.id;
            state.authLevel = action.payload.authLevel;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.id = '';
            state.authLevel = AuthLevels.Guest;
        },

    }
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
