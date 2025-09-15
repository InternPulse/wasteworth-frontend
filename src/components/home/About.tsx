import AboutBanner from "./AboutBanner";
import MandVCards from "./MandVCards";

const About = () => {
  return (
    <div className="pb-10">
      <AboutBanner />
      <div className="py-5 px-5 space-y-5">
        <MandVCards data={[mission, vision]} />
        <div className="flex gap-2 items-center p-1 bg-green-700">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-white"></div>
          <p className="text-gray-100 text-[0.6rem] font-semibold">
            WasteWorth; Making recycling simple, rewarding, and impactful for
            everyone.
          </p>
        </div>
        <MandVCards data={[commitment, offer]} />
      </div>
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
  "Our Commitnet",
  "At WasteWorth, we are commited to promoting sustainable waste management practices. Our approach combines technology and community engagements to ensure that waste is collected, sorted, and recycled responsibly for a cleaner environment.",
];
const offer = [
  "What we offer",
  "From doorstep pickups to community recycling hubs, WasteWorth provides accesible and efficient solution to help individuals, households, and businesses reduce their environmental footprint while contributing to a greener future.",
];
export default About;
