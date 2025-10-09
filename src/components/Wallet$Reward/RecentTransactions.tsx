import DivLoader from "@/utils/DivLoader";
import EmptyDiv from "@/utils/EmptyDiv";
import { FaCheck } from "react-icons/fa";

const RecentTransactions = ({ loading }: { loading: boolean }) => {
  interface dataType {
    title: string;
    date: string;
    price: string;
  }
  console.log(loading);

  let data: dataType[] = [];
  return (
    <div className="border rounded-lg bg-white p-2">
      <div>
        <h3 className="text-[#5D5D5D] pt-4 pl-4 font-semibold pb-2 border-[#f4f5f5] border-b">
          Recent Transactions
        </h3>
      </div>
      <div className="flex flex-col">
        {(loading && <DivLoader />) ||
          (data &&
            data.length > 0 &&
            data.map((item, i) => (
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
                    <h1 className="font-semibold">{item.title}</h1>
                    <h2 className="text-[#989898] text-sm">{item.date}</h2>
                  </div>
                </div>

                <div className="md:absolute md:right-5 pl-8">
                  <h1 className="text-[#006837] font-semibold">{item.price}</h1>
                </div>
              </div>
            ))) || <EmptyDiv />}
      </div>
    </div>
  );
};

export default RecentTransactions;
