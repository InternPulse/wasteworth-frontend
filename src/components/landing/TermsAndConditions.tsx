const TermsAndConditions = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 max-w-9/10 sm:max-w-17/20 lg:max-w-4xl xl:max-w-5xl py-5 sm:py-12 lg:py-15 xl:py-20 p-4">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl text-[#3B9561] font-semibold mb-5 xl:mb-6">
          Terms and Conditions
        </h1>
        <p className="mb-6 text-gray-800 font-normal text-sm sm:text-base xl:text-lg max-w-3xl">
          Welcome to WasteWorth. By using our platform, you agree to the terms
          below. Please read them carefully to understand your rights and
          responsibilities.
        </p>
        <div className="text-xl text-gray-800 space-y-4 ">
          <ol className="list-decimal list-inside space-y-8">
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">User Responsibilities</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>Provide accurate information when signing up.</li>
                <li>
                  Use the platform only for lawful waste disposal and recycling.
                </li>
                <li>Respect other users and avoid fraudulent activity.</li>
                <li>Keep login details safe and report suspicious activity.</li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                We want WasteWorth to be safe for everyone. Please play your
                part.”
              </p>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">Disposer vs Recycler Rules</h2>
              <h3 className="font-semibold text-gray-800 my-2 text-sm sm:text-base md:text-lg">
                For Disposers:
              </h3>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>Must list only genuine and available waste materials.</li>
                <li>
                  Must ensure accurate descriptions (type, quantity, location).
                </li>
                <li>Should be available at agreed pickup times.</li>
              </ul>
              <h2 className="font-semibold text-gray-800 my-2 text-sm sm:text-base md:text-lg">
                For Recyclers:
              </h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>Must accept only listings they can fulfill.</li>
                <li>Must complete pickups professionally and respectfully.</li>
                <li>
                  Must respect disposer’s property and agreed arrangements.
                </li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                Think of it as a handshake agreement — both sides should keep
                their promises.
              </p>
            </li>

            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">Our Role</h2>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                WasteWorth is only a connector between disposers and recyclers.
              </p>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>We do not own or buy waste materials.</li>
                <li>
                  We do not guarantee the quality, quantity, or value of waste
                  listed.
                </li>
                <li>
                  We provide the digital bridge — the deal itself is between
                  disposer and recycler.
                </li>
              </ul>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">Payments</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>
                  All payments happen directly between disposers and recyclers.
                </li>
                <li>WasteWorth does not process or handle payments.</li>
                <li>Users are responsible for agreeing on payment terms.</li>
                <li>
                  WasteWorth is not liable for disputes about payment amounts or
                  delays.
                </li>
                <li>
                  Always confirm terms clearly before pickup to avoid
                  misunderstandings.
                </li>
              </ul>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">Limitation of Liability</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>WasteWorth is not responsible for:</li>
                <li>Loss, damage, or theft during transactions.</li>
                <li>Payment disputes between disposers and recyclers.</li>
                <li>Misrepresentation of waste listings.</li>
                <li>
                  Our liability is limited to providing access to the platform.
                  We can’t control every transaction — we can only provide the
                  platform.
                </li>
              </ul>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline ">Termination & Dispute Resolution</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>
                  WasteWorth may suspend or terminate accounts that break these
                  terms.
                </li>
                <li>Users may deactivate their accounts at any time.</li>
                <li>Disputes between users should be resolved directly.</li>
                <li>
                  For major issues, WasteWorth may assist with basic mediation
                  but is not obligated.
                </li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                We believe in fairness. If issues arise, let’s work together to
                find solutions.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
