import { createSlice } from "@reduxjs/toolkit"
import { guestLinks } from "../../data/constants/navbarLinks";
import { getLinks } from "../helpers/AuthLevel.helper";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";
import { IAuthState } from "../../data/types/IAuthState";

const initialState: IAuthState = {
    isLoggedIn: false,
    id: '',
    authLevel: AuthLevels.Guest,
    links: guestLinks,
    img: {
        url: '',
        alt: ''
    }
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload.id;
            state.authLevel = action.payload.authLevel;
            state.links = getLinks(action.payload.authLevel);
            state.img = action.payload.img;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.id = '';
            state.authLevel = AuthLevels.Guest;
            state.links = guestLinks;
            state.img = {
                url: '',
                alt: ''
            };
        },

    }
});


export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
