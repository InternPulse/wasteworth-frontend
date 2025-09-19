import Slider from "../../utils/Slider";
import AboutBanner from "./AboutBanner";
import MandVCards from "./MandVCards";

const About = () => {
  return (
    <div className="pb-10">
      <AboutBanner />
      <MandVCards key={11011} data={[mission, vision]} />
      <Slider />
      <MandVCards key={2} data={[commitment, offer]} />
    </div>
  );
};
const mission = [
  "Our Mission",
  "At WasteWorth, our mission is to simplify recycling by connecting households with collectors and recyclers. We make waste disposal easy, trackable, and rewariding helping recyclers access quality materials while building cleaner, and more sustainable communities.",
];
const vision = [
  "Our Vision",
  "Our vision is to create a future where every community treats  waste as valuable resources. We see a world where recycling is effortless, streets are cleaner, and recyclers are empowered with steady opportunities to grow theirs businesses. By turning waste into impact, we aim to inspire a culture of sustainability that benefits people, the planet, and the economy.",
];
const commitment = [
  "Our Commitment",
  "At WasteWorth, we are commited to promoting sustainable waste management practices. Our approach combines technology and community engagements to ensure that waste is collected, sorted, and recycled responsibly for a cleaner environment.",
];
const offer = [
  "What we offer",
  "From doorstep pickups to community recycling hubs, WasteWorth provides accesible and efficient solution to help individuals, households, and businesses reduce their environmental footprint while contributing to a greener future.",
];
export default About;
