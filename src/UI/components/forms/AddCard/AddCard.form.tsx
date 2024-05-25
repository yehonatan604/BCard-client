//** Dependencies **//
import Styles from "./AddCard.style";
import { Button, FloatingLabel, Label, Textarea } from "flowbite-react";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { addCardInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef } from "react";
import { addCardFormInputs } from "../../../../data/constants/formInputs";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import { AddCardFormProps } from "./AddCard.props";
import useCards from "../../../../core/hooks/useCards";
import { ICard } from "../../../../data/types/ICard";
import Joi from "joi";

//** AddCardForm Component **//
const AddCardForm = (props: AddCardFormProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen, cardsDeckRef } = props;

  //** Hooks **//
  const containerRef = useRef<HTMLDivElement>(null);
  const { form, errors, updateForm, chechErrors } = useForm(
    addCardInitialForm,
    schemas.addCard as unknown as Joi.ObjectSchema,
  );
  const { addCard, loadCards, loading } = useCards(cardsDeckRef!);

  //** Functions **//
  const onAddCard = async () => {
    setIsLoading(true);
    await addCard(form as ICard).then(async () => {
      setIsOpen(false);
      await loadCards();
    });
    setIsLoading(false);
  };

  //** Effects **//
  useEffect(() => {
    setIsLoading(loading);
    document.getElementById("container")!.scrollIntoView();
  }, []);

  //** JSX **//
  return (
    <form>
      {addCardFormInputs(errors).map((section, outerIndex) => {
        return (
          <div id="container" ref={containerRef} key={outerIndex}>
            <div className={Styles.container}>
              {section.map((input, innerIndex) => {
                return (
                  <div key={innerIndex} className={Styles.section}>
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
                  </div>
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
        onClick={onAddCard}
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

export default AddCardForm;
