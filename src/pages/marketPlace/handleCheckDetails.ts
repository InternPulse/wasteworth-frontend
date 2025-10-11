import type { Listing, ListingDetails } from "@/types";

export interface CheckDetails {
  setActiveModal: (a: "details" | null) => void;
  setSelectedListing: (l: ListingDetails | null) => void;
  mockListingDetails: ListingDetails;
  listing: Listing;
}

export const handleCheckDetails = ({
  setSelectedListing,
  mockListingDetails,
  listing,
  setActiveModal,
}: CheckDetails) => {
  setSelectedListing({
    ...mockListingDetails,
    id: listing.id,
    title: listing.title,
    location: listing.pickup_location,
    postedTime: listing.created_at,
    type: listing.waste_type,
    status: listing.status,
  });
  setActiveModal("details");
};
