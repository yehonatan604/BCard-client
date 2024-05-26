//** Dependencies **//
import { Button } from "flowbite-react";
import { BiPencil, BiTrash } from "react-icons/bi";
import Flex from "../../Flex/Flex.component";
import Styles from "./UserDetails.style";
import { UserDetailsProps } from "./UserDetails.props";
import { getAuthLevelName } from "../../../../../core/helpers/AuthLevel.helper";
import { IUser } from "../../../../../data/types/IUser";

//** UserDetails Component **//
const UserDetails = (props: UserDetailsProps) => {
  //** Props **//
  const { details, handleClick, open } = props;

  //** JSX **//
  return (
    <>
      <p className={Styles.paragraph}>
        {`name: ${(details as IUser).name && (details as IUser).name.first} ${(details as IUser).name && (details as IUser).name.last}`}
      </p>
      <p className={Styles.paragraph}>
        {`email: `}
        <span id="mailto" onClick={open} className={Styles.link}>
          {(details as IUser).email}
        </span>
      </p>
      <p className={Styles.paragraph}>
        {`phone: `}
        <span id="tel" onClick={open} className={Styles.link}>
          {`${(details as IUser).phone}`}
        </span>
      </p>
      <p className={Styles.paragraph}>
        {`authLevel: ${getAuthLevelName((details as IUser).isAdmin ? 3 : (details as IUser).isBusiness ? 2 : 1)}`}
      </p>
      <Flex className="m-auto gap-4">
        <Button
          id="userEditButton"
          gradientMonochrome={"info"}
          onClick={handleClick}
        >
          <BiPencil />
        </Button>
        <Button
          id="userDeleteButton"
          gradientMonochrome={"failure"}
          onClick={handleClick}
        >
          <BiTrash />
        </Button>
      </Flex>
    </>
  );
};

export default UserDetails;
