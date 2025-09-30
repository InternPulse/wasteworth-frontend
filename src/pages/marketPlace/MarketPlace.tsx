import React, { useState } from "react";
import { ChevronLeft, MapPin } from "lucide-react";
import MainCard from "@/components/dashboards/recycler/MainCard";
import { FaGift } from "react-icons/fa";
import type { CardProps } from "../dashboard/Recycler";
import Referral from "@/components/dashboards/recycler/Referral";
import { Link } from "react-router-dom";

interface Listing {
  id: string;
  title: string;
  weight: string;
  location: string;
  postedTime: string;
  image: string;
}

interface ListingDetails {
  id: string;
  title: string;
  weight: string;
  location: string;
  postedTime: string;
  image: string;
  postedBy: string;
  listingPrice: string;
  contactDetails: string;
  preferredContact: string;
  availability: string;
  pickupPoint: string;
}

const MarketplaceDashboard: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"details" | "accepted" | null>(
    null
  );
  const [selectedListing, setSelectedListing] = useState<ListingDetails | null>(
    null
  );

  const mockListings: Listing[] = Array(12)
    .fill(null)
    .map((_, index) => ({
      id: `pet-sack-${index + 1}`,
      title: "PET Sacks - 5Kg",
      weight: "5Kg",
      location: "Ikoyi",
      postedTime: "Posted 3 hrs ago",
      image: "/public/marketplace/images/recyclers-waste.jpg",
    }));

  const mockListingDetails: ListingDetails = {
    id: "pet-sack-1",
    title: "PET Sacks - 5Kg",
    weight: "5Kg",
    location: "Ikoyi",
    postedTime: "Posted 3 hrs ago",
    image: "/public/marketplace/images/recyclers-waste.jpg",
    postedBy: "John",
    listingPrice: "₦20,000",
    contactDetails: "09047564387",
    preferredContact: "Call",
    availability: "Anytime",
    pickupPoint: "463 Bin St, Ikoyi",
  };

  const handleCheckDetails = (listing: Listing) => {
    setSelectedListing({
      ...mockListingDetails,
      id: listing.id,
      title: listing.title,
      weight: listing.weight,
      location: listing.location,
      postedTime: listing.postedTime,
    });
    setActiveModal("details");
  };

  const handleAcceptListing = () => {
    setActiveModal("accepted");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSelectedListing(null);
  };

  const handleBackToMarketplace = () => {
    setActiveModal(null);
  };
  const mainCard: CardProps[] = [
    {
      bgColor: "blue",
      title: "Number Of Listings Opened",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/number-of-listings.png"
          alt="number of listings icon"
        />
      ),
      kilo: 1000,
    },
    {
      bgColor: "blue",
      title: "Total Offers Submitted",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/total-offers.png"
          alt="total offers icon"
        />
      ),
      kilo: 250,
    },
    {
      bgColor: "red",
      title: "Total Kilograms Collected",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: 5000,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 space-y-5">
        <MainCard details={mainCard} />
        <Referral />

        {/* Listings Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white p-4 rounded-lg overflow-hidden"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {listing.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location}</span>
                  <span>•</span>
                  <span>{listing.postedTime}</span>
                </div>
                <button
                  onClick={() => handleCheckDetails(listing)}
                  className="w-full bg-[#006837] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-900"
                >
                  Check Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {activeModal === "details" && selectedListing && (
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
              src={selectedListing.image}
              alt={selectedListing.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />

            <div className="mb-2">
              <h3 className="font-semibold mb-1">{selectedListing.title}</h3>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <MapPin className="size-3" />
                <span>{selectedListing.location}</span>
                <span>•</span>
                <span>{selectedListing.postedTime}</span>
              </div>
              <div className="h-0.5 mt-1 w-80% bg-gray-200 rounded"></div>
            </div>

            <div>
              <h1 className="font-bold text-lg mb-2">Details</h1>
            </div>

            <div className="space-y-2 mb-6 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Posted by</span>
                <span className="font-medium">{selectedListing.postedBy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Listing price</span>
                <span className="font-medium">
                  {selectedListing.listingPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contact details</span>
                <span className="font-medium">
                  {selectedListing.contactDetails}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Preferred contact</span>
                <span className="font-medium">
                  {selectedListing.preferredContact}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Availability</span>
                <span className="font-medium">
                  {selectedListing.availability}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pickup point</span>
                <span className="font-medium">
                  {selectedListing.pickupPoint}
                </span>
              </div>
            </div>

            <button
              onClick={handleAcceptListing}
              className="w-full bg-[#006837] text-sm text-white py-2 rounded-md font-medium hover:bg-green-900 cursor-pointer"
            >
              Accept Listing
            </button>
          </div>
        </div>
      )}

      {/* Accepted Modal */}
      {activeModal === "accepted" && (
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
                  The disposer will prepare your waste for pickup after payment
                  is confirmed.
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
      )}
    </div>
  );
};

export default MarketplaceDashboard;
