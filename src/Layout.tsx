//** Dependencies **//
import { Flowbite } from "flowbite-react";
import { ToastContainer } from "react-toastify";
import FooterC from "./UI/components/layout/Footer/Footer";
import Header from "./UI/components/layout/Header/Header.component";
import Outlet from "./UI/router/Outlet/Outlet";
import Styles from "./Layout.style";
import "react-toastify/dist/ReactToastify.css";

//** Layout Component **//
const Layout = () => {
  //** JSX **//
  return (
    <Flowbite>
      <Header />
      <Outlet className={`${Styles.main}`} />
      <FooterC />
      <ToastContainer />
    </Flowbite>
  );
};

export default Layout;
