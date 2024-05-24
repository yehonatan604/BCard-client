import { IUser } from "../../../../data/types/IUser";

export type EditProfileProps = {
    setIsLoading: (bool: boolean) => void;
    setIsOpen: (bool: boolean) => void;
    user: IUser;
    setUser: (user: IUser) => void;
};