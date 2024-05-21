//** Dependencies **//
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterC from "./Footer/Footer";
import Header from "./Header/Header.component";
import AppRoutes from "../../router/AppRoutes";
import Styles from "./Layout.style";
import "react-toastify/dist/ReactToastify.css";

//** Layout component **//
const Layout = () => {
  //** Hooks **//

  //** JSX **//
  return (
    <Flowbite>
      <BrowserRouter>
        <Header />
        <div className={`${Styles.container}`}>
          <AppRoutes />
        </div>
        <FooterC />
      </BrowserRouter>
      <ToastContainer />
    </Flowbite>
  );
};

export default Layout;
