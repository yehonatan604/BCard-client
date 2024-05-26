import { MutableRefObject } from "react";
import { ICard } from "../../../../data/types/ICard";
import { IUser } from "../../../../data/types/IUser";

export type TableProps = {
    data: IUser[] | ICard[];
    dataType: string;
    getAllUsers: () => Promise<any>;
    loadCards: () => Promise<any>;
    cardsDeckRef: MutableRefObject<ICard[]>;
};