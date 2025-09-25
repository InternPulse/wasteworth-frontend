const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto sm:p-15 grid md:grid-cols-2 gap-10 sm:gap-5 pt-5 sm:pt-8 pb-20">
      <div className="w-9/10 mx-auto sm:w-full space-y-6 order-2 md:order-1 p-2">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          Lorem ipsum donec arcu tincidunt varius scelerisque aliquam amet eu
          fermentum tortor diam interdum morbi.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">info@wasteworth.com</h3>
            <p className="text-gray-600">+2348135769899</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <p className="text-gray-600">Email, call or complete the</p>
          </div>
        </div>
      </div>
      <form className="w-9/10 max-w-md md:max-w-none mx-auto sm:w-full max-w-lg space-y-2 md:space-y-3 border border-gray-100 px-3 py-5 sm:px-5 rounded-md md:rounded-2xl order-1 md:order-2">
        <h3 className="text-lg md:text-2xl font-bold">Get in touch</h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Questions, fededback, or
        </p>
        <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <input
              className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="first-name"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              placeholder="Email*"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
          <div className="w-full px-3">
            <textarea
              className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-200 rounded py-3 px-2 sm:px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              placeholder="Message*"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-200 rounded py-3 px-2 sm:px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="referral"
              type="text"
              placeholder="How did you hear about ?"
            />
          </div>
        </div>
        <button
          className="bg-green-800 text-sm md:text-base text-white px-6 py-2 w-full rounded-lg hover:bg-green-700 transition duration-300"
          type="submit"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
