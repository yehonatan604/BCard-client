//** Dependencies **//
import { useSelector } from "react-redux";
import useAuth from "../../../core/hooks/useAuth";
import { IRootState } from "../../../data/types/IRootState";
import { IAuthState } from "../../../data/types/IAuthState";
import { SyntheticEvent, useEffect, useState } from "react";
import { IUser } from "../../../data/types/IUser";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Styles from "./Profile.style";
import { Button } from "flowbite-react";
import FormModal from "../../modals/FormModal/Form.modal";
import EditProfileForm from "../../components/forms/EditProfile/EditProfile.form";
import noPic from "../../../assets/user.png";

//** Profile Page **//
const Profile = () => {
  //** State **//
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //** Variables **//
  const { VITE_GOOGLE_MAPS_API_KEY: KEY } = import.meta.env;

  //** Redux **//
  const userId = useSelector(
    (state: IRootState) => (state.AuthSlice as IAuthState).id,
  ) as string;

  //** Hooks **//
  const { getUserById } = useAuth();

  //** Functions **//
  const onEdit = () => {
    setIsEditOpen(true);
  };

  //** Effects **//
  useEffect(() => {
    (async () => {
      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);
    })();
  }, [userId]);

  //** JSX **//
  return (
    <>
      <Flex
        dir={FlexDirs.Column}
        justify={FlexTypes.Start}
        className={Styles.container}
      >
        <h1 className={Styles.title}>Profile</h1>
        {user && (
          <Flex
            dir={FlexDirs.Column}
            justify={FlexTypes.Start}
            items={FlexTypes.Start}
            className={Styles.card}
          >
            <img
              src={user.image?.url}
              alt={user.image?.alt}
              className={Styles.img}
              onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = noPic;
                e.currentTarget.onerror = null;
              }}
              onLoad={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;
              }}
            />
            <p className={Styles.paragraph + " mt-4"}>
              Name: {user.name.first} {user.name.middle} {user.name.last}
            </p>
            <p className={Styles.paragraph}>Email: {user.email}</p>
            <p className={Styles.paragraph}>Phone: {user.phone}</p>
            <p className={Styles.paragraph}>
              Auth Level:{" "}
              {user.isAdmin ? "Admin" : user.isBusiness ? "Business" : "Normal"}
            </p>
            <p className={Styles.paragraph}>
              Address: {user.address.street} {user.address.houseNumber},{" "}
              {user.address.city}, {user.address.country}
            </p>
            <div className={Styles.mapContainer}>
              {KEY && (
                <iframe
                  className={Styles.map}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  loading="lazy"
                  src={`
                    https://www.google.com/maps/embed/v1/place?key=${KEY}
                    &q=${user?.address.street}+${user?.address.city}+${user?.address.state}
                  `}
                />
              )}
            </div>
            <Flex className="mt-4 h-[20vh] w-full">
              <Button
                gradientMonochrome={"info"}
                className={Styles.btn}
                onClick={onEdit}
              >
                Edit
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>

      <FormModal
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        isLoading={isLoading}
        formName="Edit Profile"
      >
        <EditProfileForm
          user={user!}
          setUser={setUser}
          setIsLoading={setIsLoading}
          setIsOpen={setIsEditOpen}
        />
      </FormModal>
    </>
  );
};
export default Profile;
