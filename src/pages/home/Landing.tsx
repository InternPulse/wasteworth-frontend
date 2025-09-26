import Hero from "../../components/landing/Hero";
import CoreFeatures from "../../components/landing/CoreFeatures";
import ForWhom from "../../components/landing/ForWhom";
import Collectibles from "../../components/landing/Collectibles";
import Partners from "../../components/landing/Partners";
import Insight from "../../components/landing/Insight";
import Slider from "../../components/landing/HearUsers";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-100">
        <Partners />
        <CoreFeatures />
        <ForWhom />
        <Slider />
        <Collectibles />
        <Insight />
      </div>
    </>
  );
};

export default Landing;
