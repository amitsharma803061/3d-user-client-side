import Banner from "../../pages/Banner/Banner";
import HowWorks from "../../pages/HowWorks/HowWorks";
import OurServices from "../../pages/OurServices/OurServices";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurServices></OurServices>
      <h2>This my home</h2>
    </div>
  );
};

export default Home;
