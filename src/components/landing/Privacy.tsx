const Privacy = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 max-w-9/10 sm:max-w-17/20 lg:max-w-4xl xl:max-w-5xl py-5 sm:py-12 lg:py-15 xl:py-20 p-4">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl text-[#3B9561] font-semibold mb-5 xl:mb-6">
          Privacy Policy
        </h1>
        <p className="mb-6 text-gray-800 font-normal text-sm sm:text-base xl:text-lg max-w-3xl">
          Your privacy matters to us. This policy explains how WasteWorth
          collects, uses, and protects your information
        </p>
        <div className="text-xl text-gray-800 space-y-4 ">
          <ol className="list-decimal list-inside space-y-8">
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline">Information We Collect</h2>

              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>
                  Personal details: name, phone number, email, and location when
                  you register.
                </li>
                <li>
                  Activity data: waste listings, pickups requested, and
                  referrals made.
                </li>
                <li>
                  Technical data: device type, browser, and usage logs (to
                  improve performance).
                </li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                We only collect information necessary to connect you with
                recyclers and keep your account secure.
              </p>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline">How We Use Your Information</h2>

              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>To match disposers with recyclers nearby.</li>
                <li>To provide rewards and track your recycling impact.</li>
                <li>
                  To send important updates (e.g., pickup status, account
                  changes).
                </li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                We do not sell your information. Your data is used only to make
                WasteWorth work better for you.
              </p>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline">How We Protect Your Data</h2>

              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>All data is encrypted in transit and at rest.</li>
                <li>
                  Access to user information is restricted to authorized staff
                  only.
                </li>
                <li>Regular monitoring to prevent unauthorized access.</li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                Your personal details are safe with us. We use bank-grade
                encryption to protect all accounts.
              </p>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline">Third-Party Sharing</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>Verified recyclers (to complete pickups).</li>
                <li>Payment providers (when you choose payouts).</li>
                <li>Regulatory authorities (only when required by law).</li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                We never sell your personal data to marketers. Your information
                is shared only when it’s needed to provide WasteWorth services.
              </p>
            </li>
            <li className="font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]">
              <h2 className="inline">Your Rights</h2>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base xl:text-lg mt-2">
                <li>You can request access to your data at any time.</li>
                <li>You can update or correct your personal details.</li>
                <li>
                  You can request account deletion if you no longer want to use
                  WasteWorth.
                </li>
                <li>You can opt out of promotional messages at any time.</li>
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                Need help managing your data? Contact us anytime at
                <span>support@wasteworth.com</span>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
