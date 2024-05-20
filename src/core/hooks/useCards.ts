//** Imports **/
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../data/types/IRootState";
import { ICardsState, cardsActions } from "../store/CardsSlice";
import { useCallback, useEffect } from "react";
import { paths } from "../../data/constants/paths";
import { HttpMethods } from "../../data/enums/HttpMethods.enum";
import { ICard } from "../../data/types/ICard";
import useAPI from "./useAPI";
import { IAuthState } from "../../data/types/IAuthState";
import { useLocation } from "react-router-dom";

//** useCards custom hook **//
const useCards = () => {
    //** Redux **//
    const dispatch = useDispatch();
    const search = useSelector(
        (state: IRootState) => state.SearchSlice.search,
    ) as string;
    const auth = useSelector<IAuthState>(
        (state: IRootState) => state.AuthSlice,
    ) as IAuthState;
    const cardsSlice = useSelector<ICardsState>(
        (state: IRootState) => state.CardsSlice
    ) as ICardsState;

    //** Hooks **//
    const { sendApiRequest, loading } = useAPI();
    const currPage = useLocation().pathname.split("/")[1];

    //** Callbacks **//
    const getData = useCallback(async () => {
        const data = await sendApiRequest(paths.cards, HttpMethods.GET);

        let filtered = data.filter(
            (card: ICard) =>
                card.title.toLowerCase().includes(search.toLowerCase()) ||
                card.subtitle.toLowerCase().includes(search.toLowerCase()),
        );
        if (currPage === "favourites" && filtered.length > 0) {
            filtered = filtered.filter((card: ICard) => card.likes.includes(auth.id));
        }

        data && dispatch(cardsActions.setCards(filtered));
    }, [sendApiRequest, search]);

    //** Effects **//
    useEffect(() => {
        if (cardsSlice.cards.length > 0) return;
        (async () => await getData())();
        return () => {
            dispatch(cardsActions.setCards([]))
        }
    }, [getData]);

    return {
        cards: cardsSlice.cards,
        favCards: cardsSlice.favCards,
        myCards: cardsSlice.myCards,
        getData,
        loading
    };
};

export default useCards;
