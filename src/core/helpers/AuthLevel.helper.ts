import { adminLinks, bizLinks, userLinks, guestLinks } from "../../data/constants/navbarLinks";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";
import { IToken } from "../../data/types/IToken";

export const getAuthLevel = (token: IToken) => {
    if (token.isAdmin) {
        return AuthLevels.Admin;
    } else if (token.isBusiness) {
        return AuthLevels.Biz;
    } else {
        return AuthLevels.User;
    }
}

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