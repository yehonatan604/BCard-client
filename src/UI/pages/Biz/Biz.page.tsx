//** Dependencies **//
import { useLocation } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";
import useAPI from "../../../core/hooks/useAPI";
import { HttpMethods } from "../../../data/enums/HttpMethods.enum";
import { ICard } from "../../../data/types/ICard";
import { paths } from "../../../data/constants/paths";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Styles from "./Biz.styles";
import GoogleMapReact from 'google-map-react';

//** Biz component **//
const Biz = () => {
    const {VITE_GOOGLE_MAPS_API_KEY:KEY} = import.meta.env;    
    
  //** State **//
  const [card, setCard] = useState<ICard | null>(null);

  //** Hooks **//
  const id = useLocation().pathname.split("/")[2];
  const { sendApiRequest } = useAPI();

  //** Functions **//
  const open = (e: MouseEvent<HTMLParagraphElement>) => {
    const id = e.currentTarget.id;
    const target = e.currentTarget.textContent;
    id === "web"
      ? window.open(`${target}`, "_blank")
      : window.open(`${id}:${target}`);
  };

  //** Effects **//
  useEffect(() => {
    (async () => {
      try {
        const res = await sendApiRequest(
          `${paths.cards}/${id}`,
          HttpMethods.GET,
        );
        if (res) setCard(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id, sendApiRequest]);

  //** JSX **//
  if (!card)
    return <h1 className={Styles.warning}>No card with that Id was found!</h1>;

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <Flex
      dir={FlexDirs.Column}
      items={FlexTypes.Start}
      className={Styles.container}
    >
      <Flex className={Styles.titleContainer}>
        <h1 className={Styles.title}>{card?.title}</h1>
      </Flex>
      <Flex className={Styles.subtitleContainer}>
        <h3 className={Styles.subtitle}>{card?.subtitle}</h3>
      </Flex>
      <Flex justify={FlexTypes.Start} className={Styles.descriptionContainer}>
        <h4 className={Styles.description}>{card?.description}</h4>
      </Flex>
      <Flex
        dir={FlexDirs.Column}
        items={FlexTypes.Start}
        className={Styles.linksContainer}
      >
        <Flex className={Styles.linksContainerItem}>
          <p>phone:</p>
          <p id="tel" className={Styles.link} onClick={open}>
            {card?.phone}
          </p>
        </Flex>
        <Flex className={Styles.linksContainerItem}>
          <p>email:</p>
          <p id="mailto" className={Styles.link} onClick={open}>
            {card?.email}
          </p>
        </Flex>
        {card?.web && (
          <Flex className={Styles.linksContainerItem}>
            <p>web:</p>
            <p id="web" className={Styles.link} onClick={open}>
              {card?.web}
            </p>
          </Flex>
        )}
      </Flex>
      <Flex className={Styles.mapContainer}>
      <div className="google-map h-[50vh] w-[50vw]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={location}
          defaultZoom={17}>
          <div className="h-[50vh] w-[50vw]">

          </div>
        </GoogleMapReact>
        </div>
      </Flex>
    </Flex>
  );
};

export default Biz;
