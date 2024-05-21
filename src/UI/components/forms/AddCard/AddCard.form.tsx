//** Dependencies **//
import { Button, FloatingLabel, Label, Textarea } from "flowbite-react";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { normalizeCard } from "../../../../core/helpers/formNormalize.helper";
import { addCardInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef } from "react";
import { addCardFormInputs } from "../../../../data/constants/formInputs";
import { FlexDirs } from "../../../../data/enums/FlexDirs.enum";
import useAPI from "../../../../core/hooks/useAPI";
import { paths } from "../../../../data/constants/paths";
import { HttpMethods } from "../../../../data/enums/HttpMethods.enum";
import { toast } from "react-toastify";

export type AddCardFormProps = {
    setIsLoading: (value: boolean) => void;
    setIsOpen: (value: boolean) => void;
    loadCards: () => Promise<void>;
}
//** LoginForm component **//
const AddCardForm = (props: AddCardFormProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen, loadCards } = props;

  //** Hooks **//
  const { sendApiRequest, loading } = useAPI();
  const { form, errors, updateForm, chechErrors } = useForm(
    addCardInitialForm,
    schemas.addCard as unknown as Joi.ObjectSchema,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  //** Functions **//
  const onAddCard = async () => {
    setIsLoading(true);
    const res = await sendApiRequest(
      paths.cards,
      HttpMethods.POST,
      normalizeCard(form),
    );
    if (res) {
      setIsOpen(false);
      toast.success("Card added successfully");
        setIsLoading(false);
        await loadCards();
    }
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
        onClick={onAddCard}
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

export default AddCardForm;
