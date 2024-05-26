//** Dependencies **//
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { ICard } from "../../../../data/types/ICard";
import { IUser } from "../../../../data/types/IUser";
import Flex from "../Flex/Flex.component";
import Styles from "./MoreDetails.style";
import AreYouSureModal from "../../../modals/AreYouSureModal/AreYouSure.modal";
import { useEffect, useState, MouseEvent } from "react";
import { toast } from "react-toastify";
import { paths } from "../../../../data/constants/paths";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import useAPI from "../../../../core/hooks/useAPI";
import FormModal from "../../../modals/FormModal/Form.modal";
import EditCardForm from "../../forms/EditCard/EditCard.form";
import useAuth from "../../../../core/hooks/useAuth";
import useWindow from "../../../../core/hooks/useWindow";
import { MoreDetailsProps } from "./MoreDetails.props";
import CardDetails from "./CardDetails/CardDetails.component";
import UserDetails from "./UserDetails/UserDetails.component";

//** MoreDetails Component **//
const MoreDetails = (props: MoreDetailsProps) => {
  //** Props **//
  const {
    details,
    dataType,
    setSelected,
    loadCards,
    cardsDeckRef,
    getAllUsers,
  } = props;

  //** State **//
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [qTitle, setQTitle] = useState<string>("");
  const [qBody, setQBody] = useState<string>("");
  const [isEditCardOpen, setIsEditCardOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //** Hooks **//
  const { sendApiRequest } = useAPI();
  const { patchUserBizStatus, deleteUser } = useAuth();
  const { open } = useWindow("moreDetails");

  //** Functions **//
  const handleEdit = async () => {
    if (dataType === "users") {
      const res = await patchUserBizStatus(details._id);
      if (res) {
        setSelected(null);
        getAllUsers();
      }
      setIsEditOpen(false);
    } else if (dataType === "cards") {
      setIsEditCardOpen(true);
    }
  };

  const handleDelete = async () => {
    if (dataType === "cards") {
      const res = await sendApiRequest(
        `${paths.cards}/${details._id}`,
        HttpMethods.DELETE,
      );

      if (res) {
        toast.success("Card deleted successfully");
        setSelected(null);
        loadCards();
      }
    } else if (dataType === "users") {
      const res = await deleteUser(details._id);
      if (res) {
        setSelected(null);
        getAllUsers();
      }
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;
    if (id.includes("user")) {
      if (id.includes("Edit")) {
        setQTitle("Edit User");
        setQBody("Are you sure you want to edit this user's Auth Level?");
        setIsEditOpen(true);
      } else if (id.includes("Delete")) {
        setQTitle("Delete User");
        setQBody("Are you sure you want to delete this user?");
        setIsDeleteOpen(true);
      }
    } else if (id.includes("card")) {
      if (id.includes("Edit")) {
        setQTitle("Edit Card");
        setQBody("Are you sure you want to edit this card?");
        setIsEditOpen(true);
      } else if (id.includes("Delete")) {
        setQTitle("Delete Card");
        setQBody("Are you sure you want to delete this card?");
        setIsDeleteOpen(true);
      }
    }
  };

  //** Effects **//
  useEffect(() => {
    // reset on unmount
    return () => {
      setIsEditOpen(false);
      setIsDeleteOpen(false);
      setQTitle("");
      setQBody("");
    };
  }, []);

  //** JSX **//
  return (
    <div>
      <Flex
        dir={FlexDirs.Column}
        justify={FlexTypes.Center}
        items={FlexTypes.Center}
        className={Styles.container}
      >
        <h1 className={Styles.title}>More Details</h1>
        <Flex
          dir={FlexDirs.Column}
          justify={FlexTypes.Start}
          items={FlexTypes.Start}
          className={Styles.containerInner}
        >
          {dataType === "cards" ? (
            <CardDetails
              details={details as ICard}
              handleClick={handleClick}
              open={open}
            />
          ) : (
            <UserDetails
              details={details as IUser}
              handleClick={handleClick}
              open={open}
            />
          )}
        </Flex>
      </Flex>

      <AreYouSureModal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        title={qTitle}
        question={qBody}
        onYes={handleDelete}
      />
      <AreYouSureModal
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title={qTitle}
        question={qBody}
        onYes={handleEdit}
      />
      <FormModal
        isOpen={isEditCardOpen}
        setIsOpen={setIsEditCardOpen}
        isLoading={loading}
        formName="Edit Card *Admin*"
      >
        <EditCardForm
          setSelected={setSelected}
          card={details as ICard}
          loadCards={loadCards}
          setIsOpen={setIsEditCardOpen}
          setIsLoading={setLoading}
          cardsDeckRef={cardsDeckRef}
        />
      </FormModal>
    </div>
  );
};

export default MoreDetails;
