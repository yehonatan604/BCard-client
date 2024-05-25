// ** Dependencies **//
import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

//** Favourites Page **//
const Favourites = () => {
  //** Variables **//
  const title = "Favourites";
  const subTitle = "Here you can find your favourite business cards";

  //** JSX **//
  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default Favourites;
