import { useThemeMode } from "flowbite-react";
import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

const Favourites = () => {
  const { mode } = useThemeMode();

  return (
    <div
      className={`mt-[10vh] max-md:mt-[28vh] ${
        mode === "light" ? "bg-slate-200" : "bg-slate-700"
      }`}
    >
      <h1 className="p-3 text-center text-4xl">Favourites</h1>
      <p className="mb-3 text-center">Here you can find your favourite cards</p>
      <CardsDeck />
    </div>
  );
};

export default Favourites;
