//** Dependencies **//
import useWindow from "../../../core/hooks/useWindow";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./About.style";

//** About Page **//
const About = () => {
  const { open } = useWindow("about");

  const { VITE_GOOGLE_MAPS_API_KEY: KEY } = import.meta.env;
  const mapAddress =
    "https://www.google.ca/maps/place/Caldeira+do+Cabe%C3%A7o+Gordo/@38.5719693,-28.674628,14.5z/data=!4m9!1m2!2m1!1s1234+BCard+St,+BCard+City,+BCard+Country!3m5!1s0xb380a45141fb72d:0xfa91e2e40472bae8!8m2!3d38.5804155!4d-28.706323!16s%2Fg%2F11cspl2wmb?entry=ttu";

  //** JSX **//
  return (
    <Flex dir={FlexDirs.Column} className={Styles.container}>
      <h1 className={Styles.title}>About Us</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          Welcome to BCard, your ultimate solution for creating, browsing, and
          managing business cards with ease. Our innovative platform is designed
          to cater to professionals and businesses of all sizes, offering a
          seamless and efficient way to handle all your business card needs.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">Our Mission</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          At BCard, we strive to simplify the way you network and manage your
          professional connections. Our mission is to provide a user-friendly,
          powerful tool that helps you create stunning business cards,
          efficiently manage your contacts, and enhance your professional
          presence.
        </p>
      </Flex>
      <h1 className="m-4 overflow-hidden text-center text-3xl">
        What We Offer
      </h1>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Create</h3>
        <p>
          Design unique and professional business cards effortlessly with our
          intuitive creation tools. Choose from a variety of templates,
          customize every detail, and ensure your business card stands out.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Browse</h3>
        <p>
          Explore a wide range of business cards within our app. Find
          inspiration, discover new contacts, and connect with professionals
          from various industries.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">CRM for Admins</h3>
        <p>
          Our comprehensive CRM features enable admins to manage business card
          data, users data, and maintain valuable business relationships. Stay
          on top of your networking game with advanced analytics and reporting
          tools.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="m-2 w-3/5">
        <h3 className="m-2 text-xl">Contact Us</h3>
        <p>
          Email:{" "}
          <span id="mailto" onClick={open} className={Styles.link}>
            BCard@email.com
          </span>
        </p>
        <p>
          Phone:{" "}
          <span id="tel" onClick={open} className={Styles.link}>
            123-456-7890
          </span>
        </p>
        <p>
          Address:{" "}
          <span id={mapAddress} onClick={open} className={Styles.link}>
            1234 BCard St, BCard City, BCard Country
          </span>
        </p>
      </Flex>
      <div className={Styles.mapContainer}>
        <iframe
          className={Styles.map}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          loading="lazy"
          src={`
          https://www.google.com/maps/embed/v1/place?key=${KEY}&q=BCard St 1234+BCard City+BCard Country
        `}
        />
      </div>
    </Flex>
  );
};

export default About;
