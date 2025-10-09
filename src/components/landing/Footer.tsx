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
              WasteWorth: Since 2025, expert recycling team building communities
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
            WasteWorth: Since 2025, expert recycling team building communities
            and individuals, one day at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
