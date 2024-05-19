import { ToastContainer } from "react-toastify";
import FooterC from "./UI/components/layout/Footer/Footer";
import Header from "./UI/components/layout/Header/Header.component";
import AppRoutes from "./UI/router/AppRoutes";
import { Flowbite } from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <Flowbite>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <FooterC />
      </BrowserRouter>
      <ToastContainer />
    </Flowbite>
  );
};

export default Layout;
