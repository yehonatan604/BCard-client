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
        justify={FlexTypes.Between}
        items={FlexTypes.Center}
        className={Styles.containerInner}
      >
        <p className={Styles.paragrapgh}>
          © 2024 Yehonatan Moravia. All rights reserved.
        </p>
        <p className={Styles.paragrapgh}>
          Contact:
          <span className={Styles.link}> yehonatan604@gmail.com</span>
        </p>
      </Flex>
    </Footer>
  );
};

export default FooterC;
