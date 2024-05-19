import { Footer } from "flowbite-react";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";

const FooterC = () => {
  return (
    <Footer className="h-[15vh] bg-blue-500">
      <Flex
        justify={FlexTypes.Center}
        items={FlexTypes.Center}
        className="w-full gap-20"
      >
        <p>Favourites</p>
        <p>Contact</p>
      </Flex>
    </Footer>
  );
};

export default FooterC;
