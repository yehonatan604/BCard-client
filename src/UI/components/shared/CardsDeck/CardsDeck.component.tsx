//** Dependencies **//
import { useState, useEffect, useCallback, useRef } from "react";
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
import { CardsDeckProps } from "./CardsDeck.props";

//** CardsDeck component **//
const CardsDeck = (props: CardsDeckProps) => {
  // ** Props **//
  const { title, subtitle } = props;

  //** State **//
  const [cards, setCards] = useState<ICard[]>([]);

  //** Hooks **//
  const { loading, sendApiRequest } = useAPI();
  const currPage = useLocation().pathname.split("/")[1];
  let cardsDeck = useRef<ICard[]>(cards);

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
    if (currPage === "mycards" && filtered.length > 0) {
      filtered = filtered.filter((card: ICard) => card.user_id === auth.id);
    }

    data && setCards(filtered);
  }, [sendApiRequest, search]);

  //** Effects **//
  useEffect(() => {
    (async () => {
      await getData();
      cardsDeck.current = cards;
    })();
    return () => setCards([]);
  }, [getData, cardsDeck]);

  //** JSX **//
  return (
    <>
      <>
        <h1 className="p-3 text-center text-4xl">{title}</h1>
        <p className="mb-3 text-center">{subtitle} </p>
      </>
      <Flex className={Styles.container}>
        {cards &&
          cards.map((card: ICard, index) => {
            return <CardSingle key={index} card={card} getData={getData} />;
          })}
        {cards.length === 0 && !loading && (
          <h1 className={Styles.noCards}>No cards were found!!!</h1>
        )}
        {loading && (
          <div className={Styles.spinnerDiv}>
            <Spinner color="purple" aria-label="Loading spinner" />
          </div>
        )}
        {cards.length < 4 && <div className="h-[50vh] w-full"></div>}
      </Flex>
    </>
  );
};

export default CardsDeck;
