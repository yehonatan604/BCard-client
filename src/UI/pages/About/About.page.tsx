import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./About.style";

const About = () => {
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
      <h1 className="overflow-hidden text-center text-3xl m-4">Our Mission</h1>
      <Flex justify={FlexTypes.Start} className="w-4/5">
        <p>
          At BCard, we strive to simplify the way you network and manage your
          professional connections. Our mission is to provide a user-friendly,
          powerful tool that helps you create stunning business cards,
          efficiently manage your contacts, and enhance your professional
          presence.
        </p>
      </Flex>
      <h1 className="overflow-hidden text-center text-3xl m-4">What We Offer</h1>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="w-3/5 m-2">
      <h3 className="text-xl m-2">Create</h3>
        <p>
          Design unique and professional business cards effortlessly with our
          intuitive creation tools. Choose from a variety of templates,
          customize every detail, and ensure your business card stands out.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="w-3/5 m-2">
      <h3 className="text-xl m-2">Browse</h3>
        <p>
          Explore a wide range of business cards within our app. Find
          inspiration, discover new contacts, and connect with professionals
          from various industries.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="w-3/5 m-2">
      <h3 className="text-xl m-2">CRM for Admins</h3>
        <p>
          Our comprehensive CRM features enable admins to manage business card
          data, users data, and maintain valuable business relationships. Stay
          on top of your networking game with advanced analytics and reporting
          tools.
        </p>
      </Flex>
      <Flex dir={FlexDirs.Column} items={FlexTypes.Start} className="w-3/5 m-2">
      <h3 className="text-xl m-2">Contact Us</h3>
        <p>Email: BCard@email.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 1234 BCard St, BCard City, BCard Country</p>
      </Flex>
    </Flex>
  );
};

export default About;
