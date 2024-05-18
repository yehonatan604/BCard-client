import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.page";
import Header from "../components/layout/Header/Header.component";
import FooterC from "../components/layout/Footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <FooterC />
    </BrowserRouter>
  );
};

export default AppRouter;
