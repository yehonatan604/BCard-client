import { Button, FloatingLabel } from "flowbite-react";
import Flex from "../wrappers/Flex/Flex.component";
import useAuth from "../../../core/hooks/useAuth";

export type LoginFormProps = {
  setIsLoading: (bool: boolean) => void;
  setIsOpen: (bool: boolean) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { setIsLoading, setIsOpen } = props;
  const { login, error } = useAuth();

  const onLogin = async () => {
    setIsLoading(true);
    await login({
      email: "",
      password: "",
    }).then(() => {
      if (error) return;
      setIsLoading(false);
      setIsOpen(false);
    });
  };

  return (
    <Flex dir="col">
      <FloatingLabel id="email" type="email" variant="filled" label="Email" />
      <FloatingLabel
        id="password"
        type="password"
        variant="filled"
        label="Password"
      />
      <Button
        gradientMonochrome={"info"}
        className="mb-1 mt-4"
        onClick={onLogin}
      >
        Send
      </Button>
    </Flex>
  );
};

export default LoginForm;
