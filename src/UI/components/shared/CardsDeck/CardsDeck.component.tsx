//** Dependencies **//
import { useRef, useState } from "react";
import { Pagination, Spinner, useThemeMode } from "flowbite-react";
import Flex from "../Flex/Flex.component";
import { ICard } from "../../../../data/types/ICard";
import CardSingle from "../CardSingle/CardSingle.component";
import Styles from "./CardsDeck.style";
import { CardsDeckProps } from "./CardsDeck.props";
import { PiPlusCircleFill } from "react-icons/pi";
import FormModal from "../../../modals/FormModal/Form.modal";
import AddCardForm from "../../forms/AddCard/AddCard.form";
import useCards from "../../../../core/hooks/useCards";
import useWindow from "../../../../core/hooks/useWindow";
import usePagination from "../../../../core/hooks/usePagination";

//** CardsDeck Component **//
const CardsDeck = (props: CardsDeckProps) => {
  // ** Props **//
  const { title, subtitle } = props;

  //** State **//
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isMobile } = useWindow();

  //** Hooks **//
  let cardsDeck = useRef<ICard[]>([]);
  const { mode } = useThemeMode();
  const { cards, loading, canShowPlusIcon, getData, loadCards } = useCards(
    cardsDeck,
    true,
  );
  const { currentPage, onPageChange } = usePagination();

  //** JSX **//
  return (
    <>
      {canShowPlusIcon && (
        <PiPlusCircleFill
          onClick={() => setShowAddCard(true)}
          color={mode === "light" ? "#3f83f8" : "white"}
          className={Styles.plusIcon}
          size={!isMobile ? 100 : 50}
        />
      )}
      <div className={Styles.titleContainer}>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.subtitle}>{subtitle} </p>
      </div>
      <Flex className={Styles.container}>
        {cards &&
          cards
            .map((card: ICard, index) => {
              return (
                <CardSingle
                  cardsDeckRef={cardsDeck}
                  key={index}
                  card={card}
                  getData={getData}
                />
              );
            })
            .filter(
              (_, index) =>
                index >= (currentPage - 1) * 9 && index < currentPage * 9,
            )}
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
      <Flex className={Styles.pagination}>
        <Pagination
          layout={isMobile ? "navigation" : "pagination"}
          currentPage={currentPage}
          totalPages={Math.ceil(cards.length / 9)}
          onPageChange={onPageChange}
          nextLabel=""
          previousLabel=""
          showIcons
        />
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
