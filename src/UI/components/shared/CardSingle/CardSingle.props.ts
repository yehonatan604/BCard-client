import { MutableRefObject } from "react";
import { ICard } from "../../../../data/types/ICard";

export type CardSingleProps = {
    card: ICard;
    getData: () => void;
    cardsDeckRef: MutableRefObject<ICard[]>;
};