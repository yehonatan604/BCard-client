//** Dependencies **//
import { useThemeMode } from "flowbite-react";
import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

//** Home page **//
const Home = () => {
  //** Hooks **//
  const { mode } = useThemeMode();

  //** JSX **//
  return (
    <div
      className={`mt-[10vh] max-md:mt-[28vh] ${
        mode === "light" ? "bg-slate-200" : "bg-slate-700"
      }`}
    >
      <h1 className="p-3 text-center text-4xl">B-Card</h1>
      <p className="mb-3 text-center">
        Here you can find business cards from all categories
      </p>
      <CardsDeck />
    </div>
  );
};

export default Home;
