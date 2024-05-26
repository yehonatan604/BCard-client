import { MutableRefObject } from "react";
import { ICard } from "../../../../data/types/ICard";
import { IUser } from "../../../../data/types/IUser";

export type MoreDetailsProps = {
    details: ICard | IUser;
    dataType: string;
    setSelected: (selected: IUser | ICard | null) => void;
    getAllUsers: () => Promise<any>;
    loadCards: () => Promise<any>;
    cardsDeckRef: MutableRefObject<ICard[]>;
};