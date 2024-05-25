// ** Dependencies **//
import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

//** MyCards Page **//
const MyCards = () => {
  //** Variables **//
  const title = "My Cards";
  const subTitle = "Here you can find your business cards";

  //** JSX **//
  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default MyCards;
