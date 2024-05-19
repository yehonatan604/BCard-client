//** Dependencies **//
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import Header from "../components/layout/Header/Header.component";
import FooterC from "../components/layout/Footer/Footer";
import Favourites from "../pages/Favourites/Favourites.page";
import RouteGuard from "./RouteGuard";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";
import { IAuthState } from "../../data/types/IAuthState";
import { useSelector } from "react-redux";
import { IRootState } from "../../data/types/IRootState";

//** AppRouter component **//
const AppRouter = () => {
  //** Redux **//
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  //** JSX **//
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/favourites"
          element={
            <RouteGuard
              authLevel={auth.authLevel}
              minimumLevel={AuthLevels.User}
            >
              <Favourites />
            </RouteGuard>
          }
        />
      </Routes>
      <FooterC />
    </BrowserRouter>
  );
};

export default AppRouter;
