//** Dependencies **//
import { useState, useEffect, useCallback } from "react";
import useAPI from "../../../../core/hooks/useAPI";
import { paths } from "../../../../data/constants/paths";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import { Spinner } from "flowbite-react";
import Flex from "../Flex/Flex.component";
import { ICard } from "../../../../data/types/ICard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../data/types/IRootState";
import CardSingle from "../CardSingle/CardSingle.component";
import Styles from "./CardsDeck.style";
import { IAuthState } from "../../../../data/types/IAuthState";
import { useLocation } from "react-router-dom";

//** CardsDeck component **//
const CardsDeck = () => {
  //** State **//
  const [cards, setCards] = useState<ICard[]>([]);

  //** Hooks **//
  const { loading, sendApiRequest } = useAPI();
  const currPage = useLocation().pathname.split("/")[1];

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

    let filtered = data.filter(
      (card: ICard) =>
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(search.toLowerCase()),
    );
    if (currPage === "favourites" && filtered.length > 0) {
      filtered = filtered.filter((card: ICard) => card.likes.includes(auth.id));
    }

    data && setCards(filtered);
  }, [sendApiRequest, search]);

  //** Effects **//
  useEffect(() => {
    (async () => await getData())();
    return () => setCards([]);
  }, [getData]);

  //** JSX **//
  return (
    <Flex className={Styles.container}>
      {cards &&
        cards.map((card: ICard, index) => {
          return <CardSingle key={index} card={card} />;
        })}
      {cards.length === 0 && !loading && (
        <h1 className={Styles.noCards}>No cards found!!!</h1>
      )}
      {loading && (
        <div className={Styles.spinnerDiv}>
          <Spinner color="purple" aria-label="Loading spinner" />
        </div>
      )}
      {cards.length < 4 && <div className="h-[50vh] w-full"></div>}
    </Flex>
  );
};

export default CardsDeck;
