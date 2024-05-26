//** Dependencies **//
import Styles from "./EditCard.style";
import { Button, FloatingLabel, Label, Textarea } from "flowbite-react";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { addCardInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef, useState } from "react";
import { addCardFormInputs } from "../../../../data/constants/formInputs";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import { EditCardFormProps } from "./EditCard.props";
import useCards from "../../../../core/hooks/useCards";
import { ICard } from "../../../../data/types/ICard";
import { deNormalizeCard } from "../../../../core/helpers/Form.helper";

//** EditCardForm Component **//
const EditCardForm = (props: EditCardFormProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen, cardsDeckRef, card, setSelected } = props;

  //** State **//
  const [isTouched, setIsTouched] = useState<boolean>(false);

  //** Hooks **//
  const containerRef = useRef<HTMLDivElement>(null);
  const { form, errors, updateForm, chechErrors, setForm } = useForm(
    addCardInitialForm,
    schemas.addCard as unknown as Joi.ObjectSchema,
  );
  const { updateCard, loadCards, loading } = useCards(cardsDeckRef!);

  //** Functions **//
  const onUpdateCard = async () => {
    console.log(form);

    setIsLoading(true);
    await updateCard({ ...(form as ICard), _id: card._id }).then(async () => {
      setIsOpen(false);
      setSelected && setSelected(null);
      await loadCards();
    });
    setIsLoading(false);
  };

  //** Effects **//
  useEffect(() => {
    setIsLoading(loading);
    if (chechErrors()) document.getElementById("container")!.scrollIntoView();
    if (!isTouched) {
      setForm(deNormalizeCard(form, card));
      setIsTouched(true);
    }
  }, [form]);

  const getdefaultValue = (key: string) => {
    if (
      key === "city" ||
      key === "country" ||
      key === "street" ||
      key === "zip" ||
      key === "houseNumber" ||
      key === "state"
    )
      return card?.address[key as keyof ICard["address"]];
    else if (key === "imageUrl") return card?.image.url;
    else if (key === "imageAlt") return card?.image.alt;
    else return card ? card[key as keyof ICard] : "";
  };

  //** JSX **//
  return (
    <form>
      {addCardFormInputs(errors).map((section, outerIndex) => {
        return (
          <div id="container" ref={containerRef} key={outerIndex}>
            <div className={Styles.container}>
              {section.map((input, innerIndex) => {
                return (
                  <Flex key={innerIndex} className={Styles.section}>
                    {input.type === "textarea" ? (
                      <Flex
                        dir={FlexDirs.Column}
                        items={FlexTypes.Start}
                        justify={FlexTypes.Start}
                      >
                        <Label
                          className={Styles.textareaLabel}
                          htmlFor={input.id}
                        >
                          {input.label}
                        </Label>
                        <Textarea
                          className={
                            input.error
                              ? `${Styles.textarea} ${Styles.error}`
                              : `${Styles.textarea}`
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
                            ? `${Styles.input} ${Styles.error}`
                            : Styles.input
                        }
                        id={input.id}
                        defaultValue={getdefaultValue(input.id) as string}
                        type={input.type}
                        variant="filled"
                        label={input.label}
                        onChange={(e: any) => {
                          updateForm(e);
                          setForm(deNormalizeCard(form, card));
                        }}
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
            </div>
            <hr className={Styles.seperator} />
          </div>
        );
      })}
      <Button
        gradientMonochrome={"info"}
        className={Styles.btn}
        onClick={onUpdateCard}
        disabled={chechErrors()}
      >
        Send
      </Button>
      {
        <p className={Styles.formError}>
          {chechErrors() && "please fill all the required fields correctly"}
        </p>
      }
    </form>
  );
};

export default EditCardForm;
