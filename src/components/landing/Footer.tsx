import { assets } from "@/assets/assets";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
//import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-green-800 px-4 sm:px-10 py-10 text-white w-full">
      <div className="space-y-10">
        <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-5">
            <img src={assets.logo3} alt="WasteWorth" />
            <p className="hidden md:inline-block">
              WasteWorth: Since 2023, expert recycling team building communities
              and individuals, one day at a time.
            </p>

            <ul className="flex items-center space-x-4">
              <li className="font-semibold text-lg">Follow</li>
              <a href="https://facebook.com/share/173vbaZkxK" target="_blank">
                <FaFacebook size={26} />
              </a>
              <a href="https://linkedin.com/company/wasteworth" target="_blank">
                <CiLinkedin size={26} />
              </a>
              {/* <a href='https://facebook.com' target='_blank' >
                  <FaXTwitter size={26}/>
                </a> */}
              <a
                href="https://www.instagram.com/invites/contact/?igsh=14z9s7ad5qx0k&utm_content=zgybkxn"
                target="_blank"
              >
                <FaInstagram size={26} />
              </a>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-lg">Company</h5>
            <ul className="flex flex-col">
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-lg">Support</h5>
            <ul className="flex flex-col">
              <a href="/terms-and-conditions">Terms and Conditions</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-lg">Other Links</h5>
            <ul>
              <a href="/faqs">Faqs</a>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm mb-4 text-center">
            Copyright &copy; {new Date().getFullYear()} | WasteWorth All Rights
            Reserved
          </p>
          <hr className="border border-gray-400" />

          <p className="md:hidden text-center px-5 mt-2">
            WasteWorth: Since 2023, expert recycling team building communities
            and individuals, one day at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { MdLocationOn, MdMailOutline } from "react-icons/md";
// import { TbBrandX } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <section className="bg-green-900 px-4 sm:px-15 py-5 flex flex-col items-center text-white">
//       <div className="grid lg:grid-cols-3 gap-5 sm:gap-10 md:gap-20 sm:py-10 mb-10">
//         <div className="flex flex-col gap-5 text-white">
//           <p className="sm:mt-auto font-semibold text-sm sm:text-base">
//             WasteWorth: Since 2025, expert tours blending culture, adventure and
//             quality.
//           </p>
//           <div className="flex items-center gap-2">
//             <span className="text-sm">Follow us</span>
//             <div className="flex gap-1 text-2xl">
//               <a href="https://tofunmitranspose.vercel.app/">
//                 <FaFacebook />
//               </a>
//               <a href=""><FaInstagram /></a>
//               <TbBrandX />
//             </div>
//           </div>
//         </div>
{
  /* Links */
}
// <div className=" grid grid-cols-2 space-y-2 w-full gap-5 md:grid-cols-3">
//   <div className="flex flex-col gap-3 text-white">
//     <h2 className="font-semibold">Company</h2>
//     <div className="text-sm flex flex-col">
//       <Link to="/about">About Us</Link>
//       <a href="#">Travel Financing</a>
//       <Link to="/contact">Contact Us</Link>
//       <a href="#">Blog</a>
//     </div>
//   </div>
//   <div className="flex flex-col gap-3 text-white">
//     <h2 className="font-semibold">Support</h2>
//     <div className="text-sm flex flex-col">
//       <Link to="/contact">Contact Us</Link>
//       <Link to="/terms-and-conditions">Terms & Conditions</Link>
//       <Link to="/privacy-policy">Privacy Policy</Link>
//     </div>
//   </div>
//   <div className="flex flex-col gap-3 text-white">
//     <h2 className="font-semibold">Company</h2>
//     <div className="text-sm flex flex-col">
//       <Link to="/faqs">FAQs</Link>
//       <a href="#">Affliliates</a>
//     </div>
//   </div>
// </div>
// {/* Contact */}
{
  /* <div className=" flex flex-col gap-4 text-white">
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
</div> */
}
//       </div>
//       <p className="font-semibold text-sm mb-1">
//         Copyright &copy; {new Date().getFullYear()} | WasteWorth All Rights
//         Reserved
//       </p>
//       <hr className="block w-full opacity-40" />
//     </section>
//   );
// };

// export default Footer;
