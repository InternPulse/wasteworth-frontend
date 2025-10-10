import { FaCheck } from "react-icons/fa";
import useWalletTransactions from "@/hooks/useWalletTransactions";


const RecentTransactions = () => {
  const { transactions } = useWalletTransactions();


 
  return (
    <div className="border rounded-lg bg-white p-2">
      <div>
        <h3 className="text-[#5D5D5D] pt-4 pl-4 font-semibold pb-2 border-[#f4f5f5] border-b">
          Recent Transactions
        </h3>
      </div>
      <div className="flex flex-col">
        {(transactions &&
          transactions.length > 0 &&
          transactions.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4 md:relative items-center"
            >
              <div className="flex gap-4 ">
                <span className="flex justify-center items-center">
                  <div className="main-bg rounded-full p-1">
                    <FaCheck className="size-2 text-white" />
                  </div>
                </span>

                <div className="w-55 md:w-96">
                  <h1 className="font-semibold">{item.transaction_type}</h1>
                  {new Date(item.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                </div>
              </div>

              <div className="md:absolute md:right-5 pl-8">
                <h1 className="text-[#006837] font-semibold">{item.amount} {item.currency}</h1>
              </div>
            </div>
          ))) || (
          <div className="flex items-center justify-center p-10">
            <h3>No data here yet</h3>
          </div>
        )}
      </div>
    </div>
  );
  /* data = [
    {
      title: "Waste purchased",
      date: "18 September 2025",
      price: "N150,000",
    },
    {
      title: "Waste purchased",
      date: "16 September 2025",
      price: "N50,000",
    },
    {
      title: "Waste purchased",
      date: "14 September 2025",
      price: "+50 points",
    },
  ]; */
};

export default RecentTransactions;
