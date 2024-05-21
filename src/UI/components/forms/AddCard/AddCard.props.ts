import { MutableRefObject } from "react";
import { ICard } from "../../../../data/types/ICard";

export type AddCardFormProps = {
    setIsLoading: (value: boolean) => void;
    setIsOpen: (value: boolean) => void;
    loadCards: () => Promise<void>;
    cardsDeckRef: MutableRefObject<ICard[]>;   
}