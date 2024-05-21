//** Dependencies **//
import { Button, FloatingLabel } from "flowbite-react";
import useAuth from "../../../../core/hooks/useAuth";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import { loginInitialForm } from "../../../../data/constants/initialForms";
import { FormProps } from "../Form.props";
import { loginFormInputs } from "../../../../data/constants/formInputs";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";

//** LoginForm component **//
const LoginForm = ({ setIsLoading, setIsOpen }: FormProps) => {
  //** Props **//

  //** Hooks **//
  const { tryLogin } = useAuth();
  const { form, errors, updateForm, chechErrors } = useForm(
    loginInitialForm,
    schemas.login as unknown as Joi.ObjectSchema,
  );

  //** Functions **//
  const onLogin = async () => {
    setIsLoading(true);
    await tryLogin(form).then(() => {
      setIsLoading(false);
      setIsOpen(false);
    });
  };

  //** JSX **//
  return (
    <form className="h-[25vh]">
      <Flex items={FlexTypes.Start} className="m-auto gap-10">
        {loginFormInputs(errors).map((input, index) => {
          return (
            <div className="h-[17vh]">
              <FloatingLabel
                key={index}
                className={`${input.error ? "border-red-500 dark:border-red-500" : ""} w-[15vw]`}
                id={input.id}
                type={input.type}
                variant="filled"
                label={input.label}
                onInput={(e:any) => updateForm(e)}
                onBlur={updateForm}
                autoFocus
                helperText={
                  input.error?.includes("empty") ||
                  input.error?.includes("be a number")
                    ? "* Required"
                    : input.error
                }
              />
            </div>
          );
        })}
      </Flex>
      <Button
        gradientMonochrome={"info"}
        className="m-auto mb-1 mt-2"
        onClick={onLogin}
        disabled={chechErrors()}
      >
        Send
      </Button>
    </form>
  );
};

export default LoginForm;
