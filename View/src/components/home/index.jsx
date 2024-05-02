import HomePageNav from "./HomePageNav";
import Hero from "./Hero";
import CategoryHome from "./CategoryHome";
import ContactHome from "./ContactHome";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";

export const Home = () => {
  return (
    <div>
     <HomePageNav />
     <Hero />
     <CategoryHome/>
    <ContactHome />
    <AboutUs />
    <Testimonial />
    </div>
  );
};

export default Home;