//** Dependencies **//
import { Button } from "flowbite-react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { ICard } from "../../../../../data/types/ICard";
import Flex from "../../Flex/Flex.component";
import Styles from "./CardDetails.style";
import { CardDetailsProps } from "./CardDetails.props";

//** CardDetails Component **//
const CardDetails = (props: CardDetailsProps) => {
  //** Props **//
  const { details, handleClick, open } = props;

  //** JSX **//
  return (
    <>
      <p className={Styles.paragraph}>
        {`title: ${(details as ICard).title && (details as ICard).title}`}
      </p>
      <p className={Styles.paragraph}>
        {`subtitle: ${(details as ICard).subtitle && (details as ICard).subtitle}`}
      </p>
      <p className={Styles.paragraph}>
        {`email: `}
        <span id="mailto" onClick={open} className={Styles.link}>
          {(details as ICard).email}
        </span>
      </p>
      <p className={Styles.paragraph}>
        {`phone: `}
        <span id="tel" onClick={open} className={Styles.link}>
          {`${(details as ICard).phone}`}
        </span>
      </p>
      <p className={Styles.paragraph}>
        {`createdAt: ${(details as ICard).createdAt.toString().split("T")[0]}`}
      </p>
      <Flex className="m-auto gap-4">
        <Button
          id="cardEditButton"
          gradientMonochrome={"info"}
          onClick={handleClick}
        >
          <BiPencil />
        </Button>
        <Button
          id="cardDeleteButton"
          gradientMonochrome={"failure"}
          onClick={handleClick}
        >
          <BiTrash />
        </Button>
      </Flex>
    </>
  );
};

export default CardDetails;
