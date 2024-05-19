//** Dependencies **//
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import Favourites from "../pages/Favourites/Favourites.page";
import RouteGuard from "./RouteGuard/RouteGuard";
import { AuthLevels } from "../../data/enums/AuthLevels.enum";
import { IAuthState } from "../../data/types/IAuthState";
import { useSelector } from "react-redux";
import { IRootState } from "../../data/types/IRootState";
import Error from "../pages/Error/Error.page";

//** AppRoutes component **//
const AppRoutes = () => {
  //** Redux **//
  const auth = useSelector<IAuthState>(
    (state: IRootState) => state.AuthSlice,
  ) as IAuthState;

  //** JSX **//
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/favourites"
        element={
          <RouteGuard authLevel={auth.authLevel} minimumLevel={AuthLevels.User}>
            <Favourites />
          </RouteGuard>
        }
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
