import { assets } from "../../assets/assets";
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
      <div className="relative grid sm:grid-cols-2 w-9/10 mx-auto  bg-gray-100/30 rounded-lg py-10 sm:p-0 px-5">
        <div className="flex-1 absolute top-0 left-0 w-full h-full sm:static brightness-70 sm:brightness-100  rounded-lg sm:rounded-none">
          <img
            src={assets.bin}
            className="h-full w-full rounded-lg sm:rounded-none"
          />
        </div>
        <div className="z-1 sm: z-0 flex justify-center items-center  rounded-lg sm:rounded-none">
          <div className="space-y-5 w-sm p-2 sm:p-0">
            <h1 className=" text-xl sm:text-2xl lg:text-4xl sm:text-center font-semibold text-white sm:text-gray-800 lg:leading-[2.9rem]">
              Be part of the change; <br /> Join the WasteWorth <br /> movement
            </h1>
            <div className="flex sm:justify-center items-center">
              <button className="bg-green-700 text-sm lg:text-base text-white px-4 lg:px-6 xl:px-9 py-2 xl:py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
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
  "Our Commitment",
  "At WasteWorth, we are commited to promoting sustainable waste management practices. Our approach combines technology and community engagements to ensure that waste is collected, sorted, and recycled responsibly for a cleaner environment.",
];
const offer = [
  "What we offer",
  "From doorstep pickups to community recycling hubs, WasteWorth provides accesible and efficient solution to help individuals, households, and businesses reduce their environmental footprint while contributing to a greener future.",
];
export default About;
