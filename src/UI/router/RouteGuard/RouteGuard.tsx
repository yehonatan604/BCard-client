//** Dependencies **//
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { RouteGuardProps } from "./RouteGuard.props";

//** RouteGuard Component **//
const RouteGuard = (props: RouteGuardProps) => {
  //** Props **//
  const { children, authLevel, minimumLevel } = props;

  //** JSX **//
  const content = (
    <Flex dir={FlexDirs.Column}>
      <div className="flex h-[50vh] w-full flex-col items-center font-bold text-white">
        <h1 className="mb-4">אינך מורשה לצפות בדף זה!</h1>
        <Button as={Link} to={"/"} className="hover:opacity-80">
          חזור לדף הבית
        </Button>
      </div>
    </Flex>
  );

  return authLevel >= minimumLevel ? <>{children}</> : content;
};

export default RouteGuard;
