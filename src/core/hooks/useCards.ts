//** Dependencies **//
import { MutableRefObject, useCallback, useEffect, useMemo, useState } from "react"
import { ICard } from "../../data/types/ICard";
import { paths } from "../../data/constants/paths";
import { HttpMethods } from "../../data/enums/HttpMethods.enum";
import useAPI from "./useAPI";
import { useSelector } from "react-redux";
import { IAuthState } from "../../data/types/IAuthState";
import { IRootState } from "../../data/types/IRootState";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizeCard } from "../helpers/Form.helper";
import { toast } from "react-toastify";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";

// *** custom hook for cards *** //
const useCards = (cardsDeck?: MutableRefObject<ICard[]>, reRender?: boolean) => {
    const [cards, setCards] = useState<ICard[]>([]);

    const { sendApiRequest, loading } = useAPI();
    const currPage = useLocation().pathname.split("/")[1];
    const getCardsDeck = useMemo(() => cardsDeck, [cardsDeck ? cardsDeck.current : []]);
    const nav = useNavigate();

    //** Redux **//
    const search = useSelector(
        (state: IRootState) => state.SearchSlice.search,
    ) as string;
    const auth = useSelector<IAuthState>(
        (state: IRootState) => state.AuthSlice,
    ) as IAuthState;

    //** Callbacks **//
    const getData = useCallback(async () => {
        const data = await sendApiRequest(paths.cards, HttpMethods.GET);

        if (data === null) return;
        let filtered = data.filter(
            (card: ICard) =>
                card.title.toLowerCase().includes(search.toLowerCase()) ||
                card.subtitle.toLowerCase().includes(search.toLowerCase()),
        );
        if (currPage === "favourites" && filtered.length > 0) {
            filtered = filtered.filter((card: ICard) => card.likes.includes(auth.id));
        }
        if (currPage === "mycards" && filtered.length > 0) {
            filtered = filtered.filter((card: ICard) => card.user_id === auth.id);
        }

        data && setCards(filtered);
    }, [sendApiRequest, search]);

    const loadCards = useCallback(async () => {
        await getData();
        cardsDeck!.current = cards;
    }, [getData, getCardsDeck]);

    //** Functions **//
    const addCard = async (card: ICard) => {
        const res = await sendApiRequest(
            paths.cards,
            HttpMethods.POST,
            normalizeCard(card),
        );
        if (res) {
            toast.success("Card added successfully");
            await loadCards();
        }
    };

    const deleteCard = async (id: string) => {
        if (auth.authLevel < AuthLevels.Biz) return toast.error("You are not authorized to delete this card");
        const res = await sendApiRequest(`${paths.cards}/${id}`, HttpMethods.DELETE);
        if (res) {
            toast.success("Card deleted successfully");
        }
    };

    const updateCard = async (card: ICard) => {
        const res = await sendApiRequest(
            `${paths.cards}/${card._id}`,
            HttpMethods.PUT,
            normalizeCard(card),
        );
        if (res) {
            toast.success("Card updated successfully");
            await loadCards();
            nav(location);
        }
    };

    //** Variables **//
    const canShowPlusIcon =
        currPage !== "favourites" && auth.authLevel >= AuthLevels.Biz;

    //** Effects **//
    useEffect(() => {
        if (!reRender) return;
        (async () => { loadCards(); })();
        return () => {
            setCards([]);
        };
    }, [loadCards, getCardsDeck!.current]);

    return { cards, addCard, canShowPlusIcon, loadCards, loading, getData, deleteCard, updateCard };
}

export default useCards;
