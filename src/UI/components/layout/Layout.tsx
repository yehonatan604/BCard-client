//** Dependencies **//
import { Flowbite, useThemeMode } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterC from "./Footer/Footer";
import Header from "./Header/Header.component";
import AppRoutes from "../../router/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

//** Layout component **//
const Layout = () => {
  const { mode } = useThemeMode();
  //** JSX **//
  return (
    <Flowbite>
      <BrowserRouter>
        <Header />
        <div
          className={`mt-[11vh] max-md:mt-[28vh] ${
            mode === "light" ? "bg-slate-200" : "bg-slate-700"
          }`}
        >
          <AppRoutes />
        </div>
        <FooterC />
      </BrowserRouter>
      <ToastContainer />
    </Flowbite>
  );
};

export default Layout;
