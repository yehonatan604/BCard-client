//** Dependencies **//
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import oopsImg from "../../../assets/oops.png";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

//** Error page **//
const Error = () => {
  //** Hooks **//
  const nav = useNavigate();

  //** Functions **//
  const goHome = () => nav("/");

  //** JSX **//
  return (
    <Flex dir={FlexDirs.Column} className="h-[100vh]">
      <h1 className="overflow-hidden text-5xl">404</h1>
      <img src={oopsImg} alt="404" className="m-10 w-1/4" />
      <Button gradientMonochrome={"info"} onClick={goHome}>
        Home
      </Button>
    </Flex>
  );
};

export default Error;
