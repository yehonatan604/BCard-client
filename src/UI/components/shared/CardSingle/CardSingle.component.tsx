import { Card, useThemeMode } from "flowbite-react";
import { PiPhone, PiHeart, PiPencil, PiTrash } from "react-icons/pi";
import { ICard } from "../../../../data/types/ICard";
import Flex from "../../wrappers/Flex/Flex.component";
import Styles from "./CardSingle.style";
import { useEffect, useState } from "react";

const CardSingle = ({ card }: { card: ICard }) => {
  const [iconsColor, setIconstColor] = useState<"black" | "white">("black");
  const { mode } = useThemeMode();

  useEffect(() => {
    setIconstColor(mode === "dark" ? "white" : "black");
    return () => {};
  }, [mode]);

  return (
    <Card
      className={Styles.card}
      renderImage={() => (
        <img src={card.image.url} alt={card.image.alt} className={Styles.cardImg} />
      )}
    >
      <Flex dir="col" justify="start" items="start" className={Styles.cardInnerContainer}>
        <h5 className={Styles.cardTitle}>{card.title}</h5>
        <h2 className={Styles.cardSubtitle}>{card.subtitle}</h2>
        <hr className={Styles.seperator} />
        <p className={Styles.cardDescription}>{card.description}</p>
        <hr className={Styles.seperator} />
        <Flex className={Styles.iconsDiv} justify="between">
          <PiPhone size={30} color={iconsColor} className={Styles.icon} />
          <PiHeart size={30} color={iconsColor} className={Styles.icon} />
          <PiPencil size={30} color={iconsColor} className={Styles.icon} />
          <PiTrash size={30} color={iconsColor} className={Styles.icon} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardSingle;
