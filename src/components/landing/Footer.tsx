import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { TbBrandX } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-900 px-4 sm:px-15 py-5 flex flex-col items-center text-white">
      <div className="grid lg:grid-cols-[20%_1fr_20%] gap-5 sm:gap-10 md:gap-20 sm:py-10 mb-10">
        <div className="flex flex-col gap-5 text-white">
          <p className="sm:mt-auto font-semibold text-sm sm:text-base">
            WasteWorth: Since 2025, expert tours blending culture, adventure and
            quality.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm">Follow us</span>
            <div className="flex gap-1 text-2xl">
              <a href="https://tofunmitranspose.vercel.app/">
                <FaFacebook />
              </a>
              <a href=""><FaInstagram /></a>
              <TbBrandX />
            </div>
          </div>
        </div>
        {/* Links */}
        <div className=" grid grid-cols-3 space-y-2 w-full ">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-semibold">Company</h2>
            <div className="text-sm flex flex-col">
              <Link to="/about">About Us</Link>
              <a href="#">Travel Financing</a>
              <Link to="/contact">Contact Us</Link>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-semibold">Support</h2>
            <div className="text-sm flex flex-col">
              <Link to="/contact">Contact Us</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-semibold">Company</h2>
            <div className="text-sm flex flex-col">
              <Link to="/faqs">FAQs</Link>
              <a href="#">Affliliates</a>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className=" flex flex-col gap-4 text-white">
          <h2 className="font-semibold">Contact Information</h2>
          <div className="flex gap-2 items-start">
            <MdLocationOn className="text-5xl sm:text-7xl h-5 sm:h-10" />
            <p className="text-xs sm:text-sm sm:mt-3">
              G-3, Ground Floor, Plato Tower plaza, Obafemi Awolowo Way, Alausa
              opposite market square, Ikeja.{" "}
            </p>
          </div>
          <p className="text-xs">
            <a href="tel:+2349013123768">+234 901 312 3768</a>,{" "}
            <a href="tel:+2348136300163">+234 813 630 0163</a>.
          </p>
          <p className="flex gap-1 text-sm sm:text-base">
            <span className="flex items-center justify-center bg-white/90 p-1 rounded-full">
              <MdMailOutline className="text-green-800" />
            </span>{" "}
            admin@wateworth.com
          </p>
        </div>
      </div>
      <p className="font-semibold text-sm mb-1">
        Copyright &copy; {new Date().getFullYear()} | WasteWorth All Rights
        Reserved
      </p>
      <hr className="block w-full opacity-40" />
    </div>
  );
};

export default Footer;
