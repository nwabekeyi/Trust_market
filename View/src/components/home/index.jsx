import Hero from "./Hero";
import CategoryHome from "./CategoryHome";
import ContactHome from "./ContactHome";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import AuthWrapper from "../users/layouts/navWrapper";

export const HomeSample = () => {

 
  return (
    <div>
     <Hero />
     <CategoryHome/>
    <Footer />
    </div>
  );
};

const MainHome = AuthWrapper(HomeSample);

const Home = () =>{
  return(
      <div>
          <MainHome />
      </div>
  )
}

export default Home;