//** Dependencies **//
import { useRef, useState } from "react";
import { Spinner, useThemeMode } from "flowbite-react";
import Flex from "../Flex/Flex.component";
import { ICard } from "../../../../data/types/ICard";
import CardSingle from "../CardSingle/CardSingle.component";
import Styles from "./CardsDeck.style";
import { CardsDeckProps } from "./CardsDeck.props";
import { PiPlusCircleFill } from "react-icons/pi";
import FormModal from "../../../modals/Form.modal";
import AddCardForm from "../../forms/AddCard/AddCard.form";
import useCards from "../../../../core/hooks/useCards";

//** CardsDeck component **//
const CardsDeck = (props: CardsDeckProps) => {
  // ** Props **//
  const { title, subtitle } = props;

  //** State **//
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  //** Hooks **//
  let cardsDeck = useRef<ICard[]>([]);
  const { mode } = useThemeMode();
  const { cards, loading, canShowPlusIcon, getData, loadCards } = useCards(cardsDeck);


  console.log(cards);
  
  //** JSX **//
  return (
    <>
      {canShowPlusIcon && (
        <PiPlusCircleFill
          onClick={() => setShowAddCard(true)}
          color={mode === "light" ? "#0259AB" : "white"}
          className="fixed right-24 top-[calc(80%-50px)] cursor-pointer"
          size={100}
        />
      )}
      <div className={Styles.titleContainer}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.subtitle}>{subtitle} </p>
      </div>
      <Flex className={Styles.container}>
        {cards &&
          cards.map((card: ICard, index) => {
            return <CardSingle cardsDeckRef={cardsDeck} key={index} card={card} getData={getData} />;
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
      <FormModal
        isOpen={showAddCard}
        setIsOpen={setShowAddCard}
        isLoading={isLoading}
        formName="Add a Business Card"
      >
        <AddCardForm
          loadCards={loadCards}
          setIsLoading={setIsLoading}
          setIsOpen={setShowAddCard}
          cardsDeckRef={cardsDeck}
        />
      </FormModal>
    </>
  );
};

export default CardsDeck;
