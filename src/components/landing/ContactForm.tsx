

export default function ContactForm() {
  return (
      <section className="bg-gray-200 my-5 p-5 rounded-md">
          <div>
              <div className="space-y-7">
                    <div className="space-y-8">
                        <h3 className="text-lg md:text-2xl text-green-700 font-bold">Get in touch</h3>
                        <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                            You can reach us anytime.
                        </p>
                    </div>
                    <form className="flex flex-col space-y-6">
                        <div className="w-full">
                            <input
                                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                                id="first-name"
                                type="text"
                                placeholder="First name"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                                id="last-name"
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
        
                        <div className="w-full ">
                            <input
                                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                                id="email"
                                placeholder="Email*"
                            />
                        </div>
                    
                        <div className="w-full ">
                            <textarea
                                className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-500 rounded py-3 px-2 sm:px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                                id="message"
                                placeholder="Message*"
                            />
                        </div>
           
                        <div className="w-full ">
                            <input
                                className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-500 rounded py-3 px-2 sm:px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                                id="referral"
                                type="text"
                                placeholder="How did you hear about ?"
                            />
                        </div>
                    
                        <button
                            className="bg-green-800 text-sm md:text-base text-white px-6 py-2 w-full rounded-lg hover:bg-green-700 transition duration-300"
                            type="submit"
                        >
                            Send message
                        </button>
                    </form>
              </div>
          </div>
         
    </section>
  )
}
