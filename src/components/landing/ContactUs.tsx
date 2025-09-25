const ContactUs = () => {
  return (
    <div className="p-25 pt-20 bg-gray-100/50 flex justify-between w-full">
      <div className="contact flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-4xl">Contact Us</h2>
            <p className="text-[#464545]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              assumenda?
            </p>
          </div>
          <div className="space-y-5">
            <p className="">+info@wasteworth.com</p>
            <p className="">+2348135769899</p>
            <h2 className="border-b  font-semibold">Customer Support</h2>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Customer Support</h2>
            <p>Email, call or complete the...</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Customer Support</h2>
            <p>Email, call or complete the...</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Customer Support</h2>
            <p>Email, call or complete the...</p>
          </div>
        </div>
      </div>
      <div className="p-12 border border-gray-200 xl:rounded-xl">
        <div className="space-y-6">
          <h2 className="font-semibold text-2xl">Get in touch</h2>
          <p className="">Questions, or feedback</p>
        </div>
        <form action="" className="flex flex-col gap-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email*" />
            <textarea placeholder="Message*" />
            <textarea placeholder="How did you hear about us?" />
          </div>
          <button className="border border-[#6c8e2c] py-2 w-full bg-[#006837] rounded-lg cursor-pointer">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
