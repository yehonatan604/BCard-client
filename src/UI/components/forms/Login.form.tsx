import { Button, FloatingLabel } from "flowbite-react";
import useAuth from "../../../core/hooks/useAuth";
import { LoginFormProps } from "./LoginForm.props";
import useForm from "../../../core/hooks/useForm";
import { schemas } from "../../../data/constants/schemas";
import Joi from "joi";

const LoginForm = (props: LoginFormProps) => {
  const { setIsLoading, setIsOpen } = props;
  const { tryLogin } = useAuth();
  const { form, errors, updateForm } = useForm(
    {
      email: "",
      password: "",
    },
    schemas.login as unknown as Joi.ObjectSchema,
  );

  const onLogin = async () => {
    setIsLoading(true);
    await tryLogin(form).then(() => {
      setIsLoading(false);
      setIsOpen(false);
    });
  };

  return (
    <form>
      <FloatingLabel
        id="email"
        type="email"
        variant="filled"
        label="Email"
        onInput={updateForm}
      />
      <p className="text-red-500">{errors.email}</p>
      <hr className="m-auto my-4 w-3/4" />
      <FloatingLabel
        id="password"
        type="password"
        variant="filled"
        label="Password"
        onInput={updateForm}
      />
      <p className="text-red-500">{errors.password}</p>
      <Button
        gradientMonochrome={"info"}
        className="mb-1 mt-4"
        onClick={onLogin}
      >
        Send
      </Button>
    </form>
  );
};

export default LoginForm;
