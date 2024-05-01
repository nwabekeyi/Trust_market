import HomePageNav from "./HomePageNav";
import Hero from "./Hero";
import CategoryHome from "./CategoryHome";
import ContactHome from "./ContactHome";

export const Home = () => {
  return (
    <div>
     <HomePageNav />
     <Hero />
     <CategoryHome/>
    <ContactHome />
    </div>
  );
};

export default Home;