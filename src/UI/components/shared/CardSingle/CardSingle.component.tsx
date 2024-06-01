//** Dependencies **//
import { Card, useThemeMode } from "flowbite-react";
import {
  PiPhone,
  PiHeart,
  PiPencil,
  PiTrash,
  PiHeartFill,
} from "react-icons/pi";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAuthState } from "../../../../data/types/IAuthState";
import { IRootState } from "../../../../data/types/IRootState";
import useAPI from "../../../../core/hooks/useAPI";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import { paths } from "../../../../data/constants/paths";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import noPic from "../../../../assets/noPic.png";
import Flex from "../Flex/Flex.component";
import Styles from "./CardSingle.style";
import useCards from "../../../../core/hooks/useCards";
import { useNavigate } from "react-router-dom";
import FormModal from "../../../modals/FormModal/Form.modal";
import EditCardForm from "../../forms/EditCard/EditCard.form";
import useWindow from "../../../../core/hooks/useWindow";
import { CardSingleProps } from "./CardSingle.props";

//** CardSingle Component **//
const CardSingle = ({ card, getData, cardsDeckRef }: CardSingleProps) => {
  //** State **//
  const [iconsColor, setIconstColor] = useState<"black" | "white">("black");
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [iconsSize, setIconsSize] = useState<number>(20);
  const { isMobile } = useWindow();

  //** Hooks **//
  const { sendApiRequest } = useAPI();
  const { mode } = useThemeMode();
  const { deleteCard, loadCards } = useCards(cardsDeckRef!);
  const nav = useNavigate();

  //** Redux **//
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  //** Effects **//
  useEffect(() => {
    setIconsSize(isMobile ? 20 : 30);
    setIconstColor(mode === "dark" ? "white" : "black");
  }, [mode, card, auth, isMobile]);

  //** Functions **//
  const handleLike = async () => {
    const res = await sendApiRequest(
      paths.cards + "/" + card._id,
      HttpMethods.PATCH,
    );
    if (res) {
      getData();
      if (card.likes.includes(auth.id)) {
        card.likes = card.likes.filter((id) => id !== auth.id);
      } else card.likes.push(auth.id);
    }
  };

  const handleDelete = async () => {
    await deleteCard(card._id).then(() => getData());
  };

  const navToBiz = () => {
    nav(`/biz/${card._id}`);
  };

  const handleCall = () => {
    window.open(`tel:${card.phone}`);
  };

  //** Variables **//
  const heartProps = {
    size: iconsSize,
    color: iconsColor,
    onClick: handleLike,
    className: Styles.icon,
  };

  const heart = card.likes.includes(auth.id) ? (
    <PiHeartFill {...heartProps} color="red" />
  ) : (
    <PiHeart {...heartProps} />
  );

  const editCard = () => {
    setShowEditModal(true);
  };

  //** JSX **//
  return (
    <>
      <Card
        className={Styles.card}
        renderImage={() => (
          <img
            src={card.image.url}
            alt={card.image.alt}
            className={Styles.cardImg}
            // If image fails to load, set it to a default image
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = noPic;
              e.currentTarget.onerror = null;
            }}
            onClick={navToBiz}
          />
        )}
      >
        <Flex
          dir={FlexDirs.Column}
          justify={FlexTypes.Start}
          items={FlexTypes.Start}
        >
          <h5 className={Styles.cardTitle}>{card.title}</h5>
          <h2 className={Styles.cardSubtitle}>{card.subtitle}</h2>
          <hr className={Styles.seperator} />
          <p className={Styles.cardDescription}>{card.description}</p>
          <hr className={Styles.seperator} />
          <Flex
            className={Styles.iconsDiv}
            justify={auth.authLevel > 1 ? FlexTypes.Between : FlexTypes.Center}
          >
            <PiPhone
              size={iconsSize}
              color={iconsColor}
              className={Styles.icon}
              onClick={handleCall}
            />
            {auth.isLoggedIn && heart}
            {auth.authLevel > 1 && auth.id === card.user_id && (
              <>
                <PiPencil
                  size={iconsSize}
                  color={iconsColor}
                  className={Styles.icon}
                  onClick={editCard}
                />
                <PiTrash
                  size={iconsSize}
                  color={iconsColor}
                  className={Styles.icon}
                  onClick={handleDelete}
                />
              </>
            )}
          </Flex>
        </Flex>
      </Card>
      <FormModal
        isOpen={showEditModal}
        setIsOpen={setShowEditModal}
        formName="Edit Card"
        isLoading={loading}
      >
        <EditCardForm
          setIsLoading={setLoading}
          setIsOpen={setShowEditModal}
          loadCards={loadCards}
          card={card}
          cardsDeckRef={cardsDeckRef}
        />
      </FormModal>
    </>
  );
};

export default CardSingle;
