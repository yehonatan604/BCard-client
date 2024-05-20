//** Dependencies **//
import { Card, useThemeMode } from "flowbite-react";
import {
  PiPhone,
  PiHeart,
  PiPencil,
  PiTrash,
  PiHeartFill,
} from "react-icons/pi";
import { ICard } from "../../../../data/types/ICard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAuthState } from "../../../../data/types/IAuthState";
import { IRootState } from "../../../../data/types/IRootState";
import useAPI from "../../../../core/hooks/useAPI";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import { paths } from "../../../../data/constants/paths";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import Flex from "../Flex/Flex.component";
import Styles from "./CardSingle.style";

//** CardSingle component **//
const CardSingle = ({
  card,
  getData,
}: {
  card: ICard;
  getData: () => void;
}) => {
  //** State **//
  const [iconsColor, setIconstColor] = useState<"black" | "white">("black");
  //** Hooks **//
  const { sendApiRequest } = useAPI();
  const { mode } = useThemeMode();

  //** Redux **//
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  //** Effects **//
  useEffect(() => {
    setIconstColor(mode === "dark" ? "white" : "black");
  }, [mode, card, auth]);

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

  //** Variables **//
  const heartProps = {
    size: 30,
    color: iconsColor,
    onClick: handleLike,
    className: Styles.icon,
  };

  const heart = card.likes.includes(auth.id) ? (
    <PiHeartFill {...heartProps} color="red" />
  ) : (
    <PiHeart {...heartProps} />
  );

  //** JSX **//
  return (
    <Card
      className={Styles.card}
      renderImage={() => (
        <img
          src={card.image.url}
          alt={card.image.alt}
          className={Styles.cardImg}
        />
      )}
    >
      <Flex
        dir={FlexDirs.Column}
        justify={FlexTypes.Start}
        items={FlexTypes.Start}
        className={Styles.cardInnerContainer}
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
          <PiPhone size={30} color={iconsColor} className={Styles.icon} />
          {auth.isLoggedIn && heart}
          {auth.authLevel > 1 && (
            <>
              <PiPencil size={30} color={iconsColor} className={Styles.icon} />
              <PiTrash size={30} color={iconsColor} className={Styles.icon} />
            </>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardSingle;
