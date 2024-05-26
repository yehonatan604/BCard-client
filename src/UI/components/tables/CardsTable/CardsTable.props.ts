import { ICard } from "../../../../data/types/ICard";

export type CardsTableProps = {
    card: ICard;
    setSelected: (user: ICard) => void;
};