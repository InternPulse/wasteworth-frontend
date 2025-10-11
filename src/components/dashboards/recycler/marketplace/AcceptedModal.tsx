import { Link } from "react-router-dom";

export default function AcceptedModal({
  handleBackToMarketplace,
  activeModal,
}: {
  handleBackToMarketplace: () => void;
  activeModal: "details" | "accepted" | null;
}) {
  return (
    activeModal === "accepted" && (
      <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-3 py-4 sm:p-6 w-9/10 md:w-98 max-w-md">
          <div className="flex items-center justify-start gap-3">
            <div className="w-5 h-5 bg-[#006837] rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-sm">✓</span>
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Listing Accepted Successfully
            </h2>
          </div>
          <p className="text-gray-800 mb-4">What happens next:</p>

          <div className="text-left space-y-3 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                Please proceed to make payment to secure this collection.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                The disposer will prepare your waste for pickup after payment is
                confirmed.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                You'll be notified once the pickup time is set.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600">
                Track collection and payments anytime in My Offers.
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleBackToMarketplace}
              className="flex-1 border border-[#006837] text-xs sm:text-sm text-[#006837] py-2 px-1 rounded-md font-medium hover:bg-gray-50 cursor-pointer"
            >
              Back to Market Place
            </button>
            <Link
              to={"/user/payment"}
              className="flex-1 bg-[#006837] text-white text-center py-2 px-1 rounded-md text-xs sm:text-sm font-medium hover:bg-green-900 cursor-pointer"
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
