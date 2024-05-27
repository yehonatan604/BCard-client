import { Button, Modal } from "flowbite-react";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./MoreDetails.style";
import { MoreDetailsModalProps } from "./MoreDetails.props";
import { useSelector } from "react-redux";
import { IAuthState } from "../../../data/types/IAuthState";
import { IRootState } from "../../../data/types/IRootState";
import { AuthLevels } from "../../../data/enums/AuthLevels.enum";
import { PiPencil, PiTrash } from "react-icons/pi";

const MoreDetailsModal = (props: MoreDetailsModalProps) => {
  const {
    children,
    isOpen,
    setIsOpen,
    card,
    user,
    editFunc,
    deleteFunc,
    title,
  } = props;

  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header className={Styles.header}>
        <Flex dir={FlexDirs.Column} items={FlexTypes.Center}>
          <h1 className="text-2xl">
            {card
              ? card.title
              : user
                ? `${user.name.first} ${user.name.last}`
                : title}
          </h1>
        </Flex>
      </Modal.Header>
      <Modal.Body className="">{children}</Modal.Body>
      {card &&
        (auth.id === card.user_id || auth.authLevel === AuthLevels.Admin) && (
          <Modal.Footer>
            <Flex className="w-full gap-5">
              <Button
                gradientMonochrome={"success"}
                onClick={editFunc && editFunc}
              >
                <PiPencil />
              </Button>
              <Button
                gradientMonochrome={"failure"}
                onClick={deleteFunc && deleteFunc}
              >
                <PiTrash />
              </Button>
            </Flex>
          </Modal.Footer>
        )}
    </Modal>
  );
};

export default MoreDetailsModal;
