import OfferDetails from "@/components/Payments/OfferDetails";
import PaymentDetails from "@/components/Payments/PaymentDetails";
import PaymentMethod from "@/components/Payments/PaymentMethod";

const MakePayments = () => {
  return (
    <div
      className="md:mx-20 overflow-y-scroll h-[calc(100vh-75px)] py-4"
      style={{ scrollbarWidth: "none" }}
    >
      {/* Offer Details Table */}
      <div className="">
        <OfferDetails />
      </div>
      {/* Payment Details and Payment Method */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PaymentDetails />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default MakePayments;
