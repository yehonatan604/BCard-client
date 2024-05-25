//** Dependencies **//
import {
  DarkThemeToggle,
  Navbar,
  TextInput,
  useThemeMode,
} from "flowbite-react";
import userImg from "../../../../assets/user.png";
import Flex from "../../shared/Flex/Flex.component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { searchActions } from "../../../../core/store/SearchSlice";
import { ChangeEvent, useEffect, useState } from "react";
import Styles from "./Header.style";
import LoginForm from "../../forms/Login/Login.form";
import { IRootState } from "../../../../data/types/IRootState";
import useAuth from "../../../../core/hooks/useAuth";
import { IAuthState } from "../../../../data/types/IAuthState";
import { getToken } from "../../../../core/helpers/Storage.helper";
import { correctRoute } from "../../../../core/helpers/Route.helper";
import RegisterForm from "../../forms/Register/Register.form";
import FormModal from "../../../modals/FormModal/Form.modal";

//** Header component **//
const Header = () => {
  //** State **//
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //** Redux **//
  const dispatch = useDispatch();
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  //** Hooks **//
  const { mode } = useThemeMode();
  const { login, logout } = useAuth();

  //** Effects **//
  useEffect(() => {
    // Auto login
    const token = getToken();
    if (token) login(token);

    // Cleanup
    return () => {
      dispatch(searchActions.updateSearch(""));
      setIsLoading(false);
      setIsLoginOpen(false);
    };
  }, [login, dispatch]);

  //** Functions **//
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.updateSearch(e.target.value));
  };

  //** JSX **//
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
            <h1 className={`${Styles.bcard}`}>B-Card</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="w-[35vw]">
            <Flex className={Styles.navLinksContainer}>
              {auth.links.map((link: string, index: number) => {
                return (
                  <Navbar.Link
                    key={index}
                    as={Link}
                    to={correctRoute(link)}
                    href={correctRoute(link)}
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
            <Navbar.Brand as={Link} to={"/profile"}>
              <img src={userImg} alt="user's image" className={Styles.img} />
            </Navbar.Brand>

            {auth.isLoggedIn && (
              <Navbar.Brand
                className={`
            ${Styles.authContainer}
            ${mode === "light" ? Styles.authContainerL : Styles.authContainerD}
            `}
              >
                <Navbar.Link
                  as={"button"}
                  className={Styles.authLink}
                  onClick={logout}
                >
                  Logout
                </Navbar.Link>
              </Navbar.Brand>
            )}
            <Navbar.Brand
              className={`
            ${Styles.authContainer}
            ${mode === "light" ? Styles.authContainerL : Styles.authContainerD}
            `}
            >
              {!auth.isLoggedIn && (
                <Navbar.Link
                  as={"button"}
                  className={Styles.authLink}
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </Navbar.Link>
              )}
            </Navbar.Brand>
            <Navbar.Brand
              className={`
            ${Styles.authContainer}
            ${mode === "light" ? Styles.authContainerL : Styles.authContainerD}
            `}
            >
              {!auth.isLoggedIn && (
                <Navbar.Link
                  as={"button"}
                  className={Styles.authLink}
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Register
                </Navbar.Link>
              )}
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
      <FormModal
        formName="Register"
        isOpen={isRegisterOpen}
        setIsOpen={setIsRegisterOpen}
        isLoading={isLoading}
      >
        <RegisterForm
          setIsLoading={setIsLoading}
          setIsOpen={setIsRegisterOpen}
        />
      </FormModal>
    </>
  );
};

export default Header;
