//** Dependencies **//
import Styles from "./Login.style";
import { Button, FloatingLabel } from "flowbite-react";
import useAuth from "../../../../core/hooks/useAuth";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import { loginInitialForm } from "../../../../data/constants/initialForms";
import { loginFormInputs } from "../../../../data/constants/formInputs";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { LoginFormProps } from "./Login.props";

//** LoginForm Component **//
const LoginForm = ({ setIsLoading, setIsOpen }: LoginFormProps) => {
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
    <form>
      <Flex items={FlexTypes.Start} className={Styles.container}>
        {loginFormInputs(errors).map((input, index) => {
          return (
            <div className={Styles.section} key={index}>
              <FloatingLabel
                className={
                  input.error ? `${Styles.input} ${Styles.error}` : Styles.input
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
            </div>
          );
        })}
      </Flex>
      <Button
        gradientMonochrome={"info"}
        className={Styles.btn}
        onClick={onLogin}
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

export default LoginForm;
