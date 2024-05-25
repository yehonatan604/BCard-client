//** Dependencies **//
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import oopsImg from "../../../assets/oops.png";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Styles from "./Error.style";

//** Error Page **//
const Error = () => {
  //** Hooks **//
  const nav = useNavigate();

  //** Functions **//
  const goHome = () => nav("/");

  //** JSX **//
  return (
    <Flex dir={FlexDirs.Column} className={Styles.container}>
      <h1 className={Styles.status404}>404</h1>
      <img src={oopsImg} alt="404" className={Styles.img} />
      <Button gradientMonochrome={"info"} onClick={goHome}>
        Home
      </Button>
    </Flex>
  );
};

export default Error;
