import { IUser } from "../../../../../data/types/IUser";
import { MouseEvent } from "react";


export type UserDetailsProps = {
    details: IUser;
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    open: (e: MouseEvent<HTMLParagraphElement>) => void;
};