import { IUser } from "../../../../data/types/IUser";

export type UsersTableProps = {
    user: IUser;
    setSelected: (user: IUser) => void;
};