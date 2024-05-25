import { AuthLevels } from "../enums/AuthLevels.enum";

export type IAuthState = {
    isLoggedIn: boolean;
    id: string;
    authLevel: AuthLevels;
    links: string[];
    img: {
        url: string;
        alt: string;
    }
}