import HomePageNav from "./HomePageNav";
import Hero from "./Hero";
import CategoryHome from "./CategoryHome";
import ContactHome from "./ContactHome";
import AboutUs from "./AboutUs";

export const Home = () => {
  return (
    <div>
     <HomePageNav />
     <Hero />
     <CategoryHome/>
    <ContactHome />
    <AboutUs />
    </div>
  );
};

export default Home;