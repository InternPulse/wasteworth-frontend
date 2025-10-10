import EmptyDiv from "@/utils/EmptyDiv";
import DivLoader from "@/utils/DivLoader";
import WasteCard from "@/utils/WasteCard";

export interface TListing {
  created_at: string;
  id: string;
  image_url: string | null;
  pickup_location: { lat: string; lng: string } | string;
  quantity: number;
  reward_estimate: string;
  status: string;
  title: string;
  waste_type: string;
}

export default function ListingCard({
  data,
  loading,
}: {
  data: TListing[];
  loading: boolean;
}) {
  console.log(data);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {(loading && <DivLoader />) ||
        (data &&
          data.map((item: TListing) => (
            <WasteCard key={item.created_at} item={item} />
          ))) || <EmptyDiv />}
    </div>
  );
}
