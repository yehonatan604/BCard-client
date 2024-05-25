//** Dependencies **//
import Styles from "./Register.style";
import { Button, Checkbox, FloatingLabel } from "flowbite-react";
import useAuth from "../../../../core/hooks/useAuth";
import useForm from "../../../../core/hooks/useForm";
import { schemas } from "../../../../data/constants/schemas";
import Joi from "joi";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import { normalizeUser } from "../../../../core/helpers/Form.helper";
import { registerInitialForm } from "../../../../data/constants/initialForms";
import { useEffect, useRef, useState } from "react";
import { registerationFormInputs } from "../../../../data/constants/formInputs";
import { IUser } from "../../../../data/types/IUser";
import { RegisterFormProps } from "./Register.props";

//** LoginForm Component **//
const RegisterForm = (props: RegisterFormProps) => {
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
              className={Styles.container}
              justify={FlexTypes.Start}
              items={FlexTypes.Start}
            >
              {section.map((input, innerIndex) => {
                console.log(input);

                return (
                  <Flex key={innerIndex} className={Styles.section}>
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
                      onKeyUp={(e: any) => updateForm(e)}
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
            <hr className={Styles.seperator} />
          </div>
        );
      })}
      <Flex className={Styles.chkboxContainer}>
        <Checkbox
          id="isBusiness"
          checked={isBiz}
          onChange={() => setIsBiz(!isBiz)}
          className={Styles.chkBox}
          autoFocus
        />
        <p>is business</p>
      </Flex>
      <hr className={Styles.seperator} />
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

export default RegisterForm;
