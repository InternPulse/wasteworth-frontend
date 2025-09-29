import { ArrowLeft } from "lucide-react";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import MakePayments from "@/pages/Payments/MakePayments";
import { useNavigate } from "react-router-dom";

const PaymentLayout = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#F4F4F4] fixed top-0 left-0 w-screen min-h-screen z-2000">
      {/* Navbar */}
      <nav className="bg-white flex items-center sticky top-0 left-0 right-0 h-15 sm:h-16 z-20 px-4 md:px-8 shadow relative">
        <div
          onClick={() => navigate(-1)}
          className="absolute flex items-center"
        >
          <Button variant="ghost" className="flex gap-2 items-center p-0">
            <ArrowLeft /> <span className="text-sm">Back</span>
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          <img src={assets.logo} alt="Logo" className="size-17 sm:size-20" />
        </div>
      </nav>

      <main className="px-6">
        {/* center content and limit max width to avoid overflow on small screens */}
        <div className="max-w-5xl w-full mx-auto">
          <MakePayments />
        </div>
      </main>
    </div>
  );
};

export default PaymentLayout;
