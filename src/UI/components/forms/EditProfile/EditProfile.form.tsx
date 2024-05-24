//** Dependencies **//
import { Button, FloatingLabel } from "flowbite-react";
import useAuth from "../../../../core/hooks/useAuth";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import {
  deNormalizeUser,
  normalizeEditProfile,
} from "../../../../core/helpers/formNormalize.helper";
import { editProfileInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef } from "react";
import { editProfileFormInputs } from "../../../../data/constants/formInputs";
import { IUser } from "../../../../data/types/IUser";
import { EditProfileProps } from "./EditProfile.props";

//** LoginForm component **//
const EditProfileForm = (props: EditProfileProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen, user, setUser } = props;

  //** Hooks **//
  const { updateUser } = useAuth();
  const { form, errors, updateForm, setForm, chechErrors } = useForm(
    editProfileInitialForm,
    schemas.editProfile as unknown as Joi.ObjectSchema,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  //** Functions **//
  const onEdit = async () => {
    setIsLoading(true);
    const normalized = { ...normalizeEditProfile(form) };    
    await updateUser(normalized).then((res) => {
      setIsLoading(false);
      setIsOpen(false);
      setUser(res);
    })
  };

  const getdefaultValue = (key: string) => {
    if (
      key === "city" ||
      key === "country" ||
      key === "street" ||
      key === "zip" ||
      key === "houseNumber" ||
      key === "state"
    )
      return user?.address[key as keyof IUser["address"]];
    if (key === "first" || key === "middle" || key === "last")
      return user?.name[key as keyof IUser["name"]];
    else if (key === "imageUrl") return user?.image?.url;
    else if (key === "imageAlt") return user?.image?.alt;
    else return user ? user[key as keyof IUser] : "";
  };

  //** Effects **//
  useEffect(() => {
    setForm(deNormalizeUser(user));
    document.getElementById("container")!.scrollIntoView();
  }, []);

  //** JSX **//
  return (
    <form>
      {editProfileFormInputs(errors).map((section, outerIndex) => {
        return (
          <div id="container" ref={containerRef} key={outerIndex}>
            <Flex
              className="gap-10"
              justify={FlexTypes.Start}
              items={FlexTypes.Start}
            >
              {section.map((input, innerIndex) => {
                return (
                  <Flex key={innerIndex} className="w-[100%]">
                    <FloatingLabel
                      className={
                        input.error ? "border-red-500 dark:border-red-500" : ""
                      }
                      id={input.id}
                      defaultValue={getdefaultValue(input.id) as string}
                      type={input.type}
                      variant="filled"
                      label={input.label}
                      onInput={(e: any) => updateForm(e)}
                      onBlur={updateForm}
                      autoFocus
                      helperText={
                        input.error?.includes("empty") ||
                        input.error?.includes("be a number")
                          ? "* Required"
                          : input.error
                      }
                    />
                  </Flex>
                );
              })}
            </Flex>
            <hr className="m-10" />
          </div>
        );
      })}
      <Button
        gradientMonochrome={"info"}
        className="m-auto"
        onClick={onEdit}
        disabled={chechErrors()}
      >
        Send
      </Button>
      {
        <p className="pt-2 text-center">
          {chechErrors() && "please fill all the required fields correctly"}
        </p>
      }
    </form>
  );
};

export default EditProfileForm;
