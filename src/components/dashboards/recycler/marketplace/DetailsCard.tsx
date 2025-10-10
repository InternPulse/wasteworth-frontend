import type { ListingDetails } from "@/types";
import { ChevronLeft, MapPin } from "lucide-react";

interface DetailType {
  activeModal: "details" | "accepted" | null;
  selectedListing: ListingDetails | null;
  handleAcceptListing: () => void;
  handleCloseModal: () => void;
}

export default function DetailsModal({
  activeModal,
  selectedListing,
  handleAcceptListing,
  handleCloseModal,
}: DetailType) {
  return (
    activeModal === "details" &&
    selectedListing && (
      <div className="fixed inset-0 top-15 h-[calc(100vh-60px)] p-2 my-auto bg-black/50 bg-opacity-50 flex items-cente justify-center z-50">
        <div
          className="bg-white rounded-lg px-4 py-2 w-78  md:w-96 max-w-md overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex items-center mb-4">
            <button
              onClick={handleCloseModal}
              className="mr-1.5 cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>
            <h2 className="text-sm font-semibold">Listing Details</h2>
          </div>
          <img
            src={selectedListing?.image ?? ""}
            alt={selectedListing?.title}
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
        </div>
        <div className="mb-2">
          <h3 className="font-semibold mb-1">{selectedListing?.title}</h3>
          <div className="flex items-center space-x-2 text-xs text-gray-600">
            <MapPin className="size-3" />
            <span>{JSON.parse(selectedListing?.location.toString())}</span>
            <span>•</span>
            <span>{selectedListing?.postedTime}</span>
          </div>
          <div className="h-0.5 mt-1 w-80% bg-gray-200 rounded"></div>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-2">Details</h1>
        </div>

        <div className="space-y-2 mb-6 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">Posted by</span>
            <span className="font-medium">{selectedListing?.listingPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Listing price</span>
            <span className="font-medium">{selectedListing?.listingPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Contact details</span>
            <span className="font-medium">
              {selectedListing?.contactDetails}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Preferred contact</span>
            <span className="font-medium">
              {selectedListing?.preferredContact}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Availability</span>
            <span className="font-medium">{selectedListing?.availability}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Pickup point</span>
            <span className="font-medium">{selectedListing?.pickupPoint}</span>
          </div>
          <button
            onClick={handleAcceptListing}
            className="w-full bg-[#006837] text-sm text-white py-2 rounded-md font-medium hover:bg-green-900 cursor-pointer"
          >
            Accept Listing
          </button>
        </div>
      </div>
    )
  );
}
