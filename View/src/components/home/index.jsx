import Hero from "./Hero";
import CategoryHome from "./CategoryHome";
import ContactHome from "./ContactHome";import Testimonial from "./Testimonial";
import AuthWrapper from "../users/layouts/navWrapper";
import BestSelling from "./bestSelling";

export const HomeSample = () => {


  const closeModal = () =>{
    return isOpen
  }



 
  return (
    <div>
     
     <Hero />
     <CategoryHome/>
     <BestSelling />
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