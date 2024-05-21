//** Dependencies **//
import { Button, Checkbox, FloatingLabel } from "flowbite-react";
import useAuth from "../../../../core/hooks/useAuth";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { normalizeUser } from "../../../../core/helpers/formNormalize.helper";
import { registerInitialForm } from "../../../../data/constants/initialForms";
import { FormProps } from "../Form.props";
import { useEffect, useRef, useState } from "react";
import { registerationFormInputs } from "../../../../data/constants/formInputs";
import { IUser } from "../../../../data/types/IUser";

//** LoginForm component **//
const RegisterForm = (props: FormProps) => {
  //** Props **//
  const { setIsLoading, setIsOpen } = props;

  //** State **//
  const [isBiz, setIsBiz] = useState(false);

  //** Hooks **//
  const { register } = useAuth();
  const { form, errors, updateForm, chechErrors } = useForm(
    registerInitialForm,
    schemas.register as unknown as Joi.ObjectSchema,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  //** Functions **//
  const onLogin = async () => {
    setIsLoading(true);
    const normalized = { ...normalizeUser(form), isBusiness: isBiz };
    await register(normalized as IUser).then(() => {
      setIsLoading(false);
      setIsOpen(false);
    });
  };

  //** Effects **//
  useEffect(() => {
    document.getElementById("container")!.scrollIntoView();
  }, []);

  //** JSX **//
  return (
    <form>
      {registerationFormInputs(errors).map((section, outerIndex) => {
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
                    <FloatingLabel
                      className={
                        input.error ? "border-red-500 dark:border-red-500" : ""
                      }
                      id={input.id}
                      type={input.type}
                      variant="filled"
                      label={input.label}
                      onInput={(e:any)=>updateForm(e)}
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
            <hr className="m-auto my-4 w-3/4" />
          </div>
        );
      })}
      <Flex className="ml-1 gap-3" justify={FlexTypes.Start}>
        <Checkbox
          id="isBusiness"
          checked={isBiz}
          onChange={() => setIsBiz(!isBiz)}
          className="ml-1"
          autoFocus
        />
        <p>is business</p>
      </Flex>
      <hr className="m-auto my-4 w-3/4" />
      <Button
        gradientMonochrome={"info"}
        className="m-auto mb-1 mt-4"
        onClick={onLogin}
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

export default RegisterForm;
