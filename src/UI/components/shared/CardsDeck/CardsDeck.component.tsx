//** Dependencies **//
import { useState, useEffect, useCallback, useRef } from "react";
import useAPI from "../../../../core/hooks/useAPI";
import { paths } from "../../../../data/constants/paths";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import { Spinner, useThemeMode } from "flowbite-react";
import Flex from "../Flex/Flex.component";
import { ICard } from "../../../../data/types/ICard";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../data/types/IRootState";
import CardSingle from "../CardSingle/CardSingle.component";
import Styles from "./CardsDeck.style";
import { IAuthState } from "../../../../data/types/IAuthState";
import { useLocation } from "react-router-dom";
import { CardsDeckProps } from "./CardsDeck.props";
import { PiPlusCircleFill } from "react-icons/pi";
import { AuthLevels } from "../../../../data/enums/AuthLevels.enum";
import FormModal from "../../../modals/Form.modal";
import AddCardForm from "../../forms/AddCard/AddCard.form";

//** CardsDeck component **//
const CardsDeck = (props: CardsDeckProps) => {
  // ** Props **//
  const { title, subtitle } = props;

  //** State **//
  const [cards, setCards] = useState<ICard[]>([]);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //** Hooks **//
  const { loading, sendApiRequest } = useAPI();
  const currPage = useLocation().pathname.split("/")[1];
  let cardsDeck = useRef<ICard[]>(cards);
  const {mode} = useThemeMode();

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

  //** Variables **//
  const canShowPlusIcon = currPage !== "favourites" &&auth.authLevel >= AuthLevels.Biz;
  
  //** JSX **//
  return (
    <>
        {canShowPlusIcon && (
          <PiPlusCircleFill 
            onClick={()=>setShowAddCard(true)} 
            color={mode === 'light'? '#0259AB': 'white'} 
            className="fixed top-[calc(80%-50px)] right-24 cursor-pointer" size={100} 
          />
        )}
      <div className={Styles.titleContainer}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.subtitle}>{subtitle} </p>
      </div>
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
        {cards.length < 4 && <div className={Styles.emptyDiv}></div>}
      </Flex>
      <FormModal isOpen={showAddCard} setIsOpen={setShowAddCard} isLoading={isLoading} formName="Add a Business Card">
        <AddCardForm setIsLoading={setIsLoading} setIsOpen={setShowAddCard} />
      </FormModal>
    </>
  );
};

export default CardsDeck;
