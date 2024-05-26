import { ICard } from "../../../../../data/types/ICard";
import { MouseEvent } from "react";


export type CardDetailsProps = {
    details: ICard;
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    open: (e: MouseEvent<HTMLParagraphElement>) => void;
};