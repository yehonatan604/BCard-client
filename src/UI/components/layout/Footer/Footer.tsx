//** Dependencies **//
import { Footer } from "flowbite-react";
import Flex from "../../shared/Flex/Flex.component";
import { FlexTypes } from "../../../../data/enums/FlexTypes.enum";
import Styles from "./Footer.style";

//** Footer component **//
const FooterC = () => {
  //** JSX **//
  return (
    <Footer className={Styles.container}>
      <Flex
        justify={FlexTypes.Center}
        items={FlexTypes.Center}
        className={Styles.containerInner}
      >
        <p>Favourites</p>
        <p>Contact</p>
      </Flex>
    </Footer>
  );
};

export default FooterC;
