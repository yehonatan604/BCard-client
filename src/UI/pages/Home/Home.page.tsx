//** Dependencies **//
import CardsDeck from "../../components/shared/CardsDeck/CardsDeck.component";

//** Home Page **//
const Home = () => {
  //** Variables **//
  const title = "B-Card";
  const subTitle = "Here you can find business cards from all categories";

  //** JSX **//
  return <CardsDeck title={title} subtitle={subTitle} />;
};

export default Home;
