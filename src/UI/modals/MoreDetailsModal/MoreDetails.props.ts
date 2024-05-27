import { ReactNode } from "react";
import { ICard } from "../../../data/types/ICard";
import { IUser } from "../../../data/types/IUser";

export type MoreDetailsModalProps = {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    card?: ICard;
    user?: IUser;
    editFunc?: () => void;
    deleteFunc?: () => void;
    title?: string;
};