import { FaEnvelope, FaHeadset, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { FaMessage } from "react-icons/fa6";
import type { TContactDetails } from "@/types";

const ContactUs = () => {
  const contactDetails: TContactDetails[] = [
    {
      id: 1,
      icon: <FaPhone />,
      name: "Phone",
      contact: "+2348135769899",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      name: "Email",
      contact: "info@wasteworth.com",
    },
    {
      id: 3,
      icon: <FaHeadset />,
      name: "Live chat",
      contact:
        "Our support team is available around the clock to address any concerns or queries you may have.",
    },
    {
      id: 4,
      icon: <FaMessage />,
      name: "Feedbacks",
      contact:
        "Your feedback helps us improve and shape the future of WasteWorth.",
    },
  ];

  return (
    <section className="bg-gray-100 gap-10 sm:gap-5 pt-5 sm:pt-8 pb-20 px-3 md:px-10">
      <div>
        <div>
          <div className="bg-white py-5 text-center space-y-5 rounded-md px-7">
            <h2 className="text-green-600 text-lg md:text-2xl font-bold">
              Contact Us
            </h2>
            <p className="font-semibold">
              Questions, ideas, or feedback? We’re here to help and listen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" py-5 text-center space-y-5">
              {contactDetails.map((item) => (
                <ul
                  key={item.id}
                  className="bg-white gap-5 space-y-3 rounded-md text-center py-5 px-7 shadow-md"
                >
                  <li className="flex items-center justify-center text-green-600">
                    {item.icon}
                  </li>
                  <li className="font-bold text-green-600">{item.name}</li>
                  <li>{item.contact}</li>
                </ul>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
