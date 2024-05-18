import {
  DarkThemeToggle,
  Navbar,
  TextInput,
  useThemeMode,
} from "flowbite-react";
import userImg from "../../../../assets/user.png";
import Flex from "../../wrappers/Flex/Flex.component";
import { adminLinks } from "../../../../data/constants/navbarLinks";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { searchActions } from "../../../../core/store/SearchSlice";
import { ChangeEvent, useState } from "react";
import Styles from "./Header.style";
import FormModal from "../../../modals/Form.modal";
import LoginForm from "../../forms/Login.form";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { mode } = useThemeMode();

  const getLink = (currLink: string) => {
    let link = "/";
    if (currLink === "My Cards") {
      link += currLink.split(" ").join("");
    } else {
      link += currLink;
    }
    return link.toLowerCase();
  };

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.updateSearch(e.target.value));
  };

  return (
    <>
      <Navbar
        className={`
    ${Styles.navbar}
    ${mode === "light" ? Styles.navbarL : Styles.navbarD}
    `}
      >
        <Flex className={Styles.container}>
          <Navbar.Brand
            as={Link}
            to={"/"}
            href={"/"}
            className={Styles.bcardContainer}
          >
            <h1
              className={`
            ${Styles.bcard} 
            ${mode === "light" ? Styles.bcardL : Styles.bcardD}
            `}
            >
              B-Card
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="w-[35vw]">
            <Flex className={Styles.navLinksContainer}>
              {adminLinks.map((link, index) => {
                return (
                  <Navbar.Link
                    key={index}
                    as={Link}
                    to={getLink(link)}
                    href={getLink(link)}
                    className={Styles.navLink}
                  >
                    {link}
                  </Navbar.Link>
                );
              })}
            </Flex>
          </Navbar.Collapse>
          <Navbar.Brand>
            <TextInput
              rightIcon={BiSearch}
              onInput={search}
              className={Styles.search}
            />
          </Navbar.Brand>
          <Flex className={Styles.rightContainer} justify="between">
            <Navbar.Brand className={Styles.themeToggleContainer}>
              <DarkThemeToggle className={Styles.themeToggle} />
            </Navbar.Brand>
            <Navbar.Brand>
              <img src={userImg} alt="user's image" className={Styles.img} />
            </Navbar.Brand>

            <Navbar.Brand
              className={`
            ${Styles.authContainer}
            ${mode === "light" ? Styles.authContainerL : Styles.authContainerD}
            `}
            >
              <Navbar.Link
                as={"button"}
                className={Styles.authLink}
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Navbar.Link>
            </Navbar.Brand>
            <Navbar.Brand
              className={`
            ${Styles.authContainer}
            ${mode === "light" ? Styles.authContainerL : Styles.authContainerD}
            `}
            >
              <Navbar.Link as={"button"} className={Styles.authLink}>
                Register
              </Navbar.Link>
            </Navbar.Brand>
          </Flex>
        </Flex>
      </Navbar>
      <FormModal
        formName="Login"
        isOpen={isLoginOpen}
        setIsOpen={setIsLoginOpen}
        isLoading={isLoading}
      >
        <LoginForm setIsLoading={setIsLoading} setIsOpen={setIsLoginOpen} />
      </FormModal>
    </>
  );
};

export default Header;
