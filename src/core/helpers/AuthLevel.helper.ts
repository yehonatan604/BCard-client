//** Dependencies **//
import { adminLinks, bizLinks, userLinks, guestLinks } from "../../data/constants/navbarLinks";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";
import { IToken } from "../../data/types/IToken";

// this function returns the AuthLevel of the user based on the token
export const getAuthLevel = (token: IToken) => {
    if (token.isAdmin) {
        return AuthLevels.Admin;
    } else if (token.isBusiness) {
        return AuthLevels.Biz;
    } else {
        return AuthLevels.User;
    }
}

// this function returns the name of the AuthLevel based on the AuthLevel Enum
export const getAuthLevelName = (authLevel: AuthLevels) => {
    switch (authLevel) {
        case AuthLevels.Admin:
            return "Admin";
        case AuthLevels.Biz:
            return "Business";
        case AuthLevels.User:
            return "User";
        default:
            return "Guest";
    }
}

// this function returns the links based on the authentication level
export const getLinks = (authLevel: AuthLevels) => {
    switch (authLevel) {
        case AuthLevels.Admin:
            return adminLinks;
        case AuthLevels.Biz:
            return bizLinks;
        case AuthLevels.User:
            return userLinks;
        default:
            return guestLinks;
    }
}
