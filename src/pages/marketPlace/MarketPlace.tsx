import React, { useEffect, useState } from "react";
import MainCard from "@/components/dashboards/recycler/MainCard";
import { FaGift } from "react-icons/fa";
import type { CardProps } from "../dashboard/Recycler";
import Referral from "@/components/dashboards/recycler/Referral";
import WasteCard from "@/utils/WasteCard";
import DetailsModal from "@/components/dashboards/recycler/marketplace/DetailsCard";
import AcceptedModal from "@/components/dashboards/recycler/marketplace/AcceptedModal";
import { handleAcceptListing } from "./handleAcceptListing";
import type { Listing, ListingDetails } from "@/types";
import { useFetch } from "@/hooks/useFetch";
import DivLoader from "@/utils/DivLoader";
import EmptyDiv from "@/utils/EmptyDiv";
const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

const MarketplaceDashboard: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"details" | "accepted" | null>(
    null
  );
  const [selectedListing, setSelectedListing] = useState<ListingDetails | null>(
    null
  );
  const { data, loading, error, refetch } = useFetch(
    `${BASE_URL}/api/v1/marketplace/listings`,
    { auto: false }
  );
  useEffect(() => {
    refetch();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Error loading dashboard: {error.message || "Something went wrong"}
        </div>
      </div>
    );
  }
  const transformToListing = (data: any): Listing[] => {
    if (!Array.isArray(data)) return [];

    return data.map((item) => {
      const listing = item.listing || {};
      const location =
        typeof listing.pickup_location === "string"
          ? listing.pickup_location
          : listing.pickup_location?.address || "Unknown Location";

      return {
        id: listing.id || item.id,
        title: listing.title || "Untitled Listing",
        waste_type: listing.waste_type || "Unknown",
        quantity: listing.quantity || 0,
        reward_estimate: listing.reward_estimate || "0.00",
        pickup_location: location,
        image_url: listing.image_url || null,
        status: listing.status || item.escrow_status || "pending",
        created_at: listing.created_at || item.created_at,
      };
    });
  };

  console.log(data);
  const listings = transformToListing(data?.data);

  //console.log(listings);

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
      kilo: 0,
    },
    {
      bgColor: "green",
      title: "Total Offers Submitted",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/total-offers.png"
          alt="total offers icon"
        />
      ),
      kilo: 0,
    },
    {
      bgColor: "red",
      title: "Total Kilograms Collected",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: 0,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 space-y-5">
        <MainCard details={mainCard} />
        <Referral />

        {/* Listings Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(loading && <DivLoader />) ||
            (listings &&
              listings.map((listing: Listing, i: number) => (
                <WasteCard
                  key={listing.created_at + i}
                  checkDetails={() => {
                    setSelectedListing; // ✅ only the ID now
                    setActiveModal("details");
                  }}
                  item={listing}
                />
              ))) || <EmptyDiv />}
        </div>
      </div>

      {activeModal === "details" && (
        <DetailsModal
          activeModal={activeModal}
          selectedListing={selectedListing}
          handleAcceptListing={() => handleAcceptListing({ setActiveModal })}
          handleCloseModal={handleCloseModal}
        />
      )}

      {activeModal === "accepted" && (
        <AcceptedModal
          activeModal={activeModal}
          handleBackToMarketplace={handleBackToMarketplace}
        />
      )}
    </div>
  );
};

export default MarketplaceDashboard;
