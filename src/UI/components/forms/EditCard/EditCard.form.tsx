//** Dependencies **//
import { Button, FloatingLabel, Label, Textarea } from "flowbite-react";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { addCardInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef } from "react";
import { addCardFormInputs } from "../../../../data/constants/formInputs";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import { EditCardFormProps } from "./EditCard.props";
import useCards from "../../../../core/hooks/useCards";
import { ICard } from "../../../../data/types/ICard";
import { deNormalizeCard } from "../../../../core/helpers/formNormalize.helper";

//** EditCardForm component **//
const EditCardForm = (props: EditCardFormProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen, cardsDeckRef, card } = props;

  //** Hooks **//
  const containerRef = useRef<HTMLDivElement>(null);
  const { form, errors, updateForm, chechErrors, setForm } = useForm(
    addCardInitialForm,
    schemas.addCard as unknown as Joi.ObjectSchema,
  );
  const {updateCard, loadCards, loading} = useCards(cardsDeckRef!);

  //** Functions **//
  const onUpdateCard = async () => {     
    console.log(form);
       
    setIsLoading(true);
    await updateCard({...form as ICard, _id:card._id}).then(async () => {
      setIsOpen(false);
      await loadCards();
    });
    setIsLoading(false);
  };

  //** Effects **//
  useEffect(() => {
    setIsLoading(loading);
    document.getElementById("container")!.scrollIntoView();
    setForm(deNormalizeCard(form && form, card && card));
  }, []);

  const getdefaultValue = (key: string) => {
    if (key === "city" || key === "country" || key === "street" || key === "zip" || key === "houseNumber" || key === "state") return card?.address[key as keyof ICard["address"]];
    else if (key === "imageUrl") return card?.image.url;
    else if (key === "imageAlt") return card?.image.alt;
    else return card ? card[key as keyof ICard] : "";
  } ;

  //** JSX **//
  return (
    <form>
      {addCardFormInputs(errors).map((section, outerIndex) => {
        return (
          <div id="container" ref={containerRef} key={outerIndex}>
            <Flex
              className="h-[15vh] gap-10"
              justify={FlexTypes.Start}
              items={FlexTypes.Start}
            >
              {section.map((input, innerIndex) => {
                return (
                  <Flex key={innerIndex} className="w-[100%]">
                    {input.type === "textarea" ? (
                      <Flex
                        dir={FlexDirs.Column}
                        items={FlexTypes.Center}
                        justify={FlexTypes.Start}
                        className="h-[fit-content] w-3/4"
                      >
                        <Label className="h-[auto]" htmlFor={input.id}>
                          {input.label}
                        </Label>
                        <Textarea
                          className={
                            input.error
                              ? "mb-0 h-[auto] border-red-500 pb-0 dark:border-red-500"
                              : ""
                          }
                          id={input.id}
                          onChange={updateForm}
                          onBlur={updateForm}
                          autoFocus
                          defaultValue={card ? card.description : ""}
                          helperText={
                            input.error?.includes("empty")
                              ? "* Required"
                              : input.error
                          }
                        />
                      </Flex>
                    ) : (
                      <FloatingLabel
                        className={
                          input.error
                            ? "border-red-500 dark:border-red-500"
                            : ""
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
                    )}
                  </Flex>
                );
              })}
            </Flex>
            <hr className="m-auto my-4 w-3/4" />
          </div>
        );
      })}
      <Button
        gradientMonochrome={"info"}
        className="m-auto mb-1 mt-4"
        onClick={onUpdateCard}
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

export default EditCardForm;
