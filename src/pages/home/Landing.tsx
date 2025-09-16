import Hero from "../../components/home/Hero";
import Footer from "../../components/home/Footer";
import CoreFeatures from "../../components/home/CoreFeatures";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-gray-100">
      <CoreFeatures/>
      <CoreFeatures />

      </div>
      <Footer />
    </div>
  );
};

export default Landing;
