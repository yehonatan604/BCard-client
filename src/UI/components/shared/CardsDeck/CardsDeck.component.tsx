import { useState, useEffect, useCallback } from "react";
import useAPI from "../../../../core/hooks/useAPI";
import { paths } from "../../../../data/constants/paths";
import { httpMethods } from "../../../../data/constants/httpMethods";
import { Spinner } from "flowbite-react";
import Flex from "../../wrappers/Flex/Flex.component";
import { ICard } from "../../../../data/types/ICard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../data/types/IRootState";
import CardSingle from "../CardSingle/CardSingle.component";
import Styles from "./CardsDeck.style";

const CardsDeck = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const { loading, sendApiRequest } = useAPI();
  const search = useSelector((state: IRootState) => state.SearchSlice.search) as string;

  const getData = useCallback(async () => {
    const data = await sendApiRequest(paths.cards, httpMethods.GET);
    const filtered = data.filter((card: ICard) => {
      return (
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(search.toLowerCase())
      );
    });
    data && setCards(filtered);
  }, [sendApiRequest, search]);
  useEffect(() => {
    getData();
    return () => {
      setCards([]);
    };
  }, [getData]);

  return (
    <Flex className={Styles.container}>
      {cards &&
        cards.map((card: ICard, index) => {
          return <CardSingle key={index} card={card} />;
        })}
      {loading && (
        <div className={Styles.spinnerDiv}>
          <Spinner color="purple" aria-label="Loading spinner" />
        </div>
      )}
    </Flex>
  );
};

export default CardsDeck;
