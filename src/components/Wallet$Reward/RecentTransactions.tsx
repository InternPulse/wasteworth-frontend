import { assets } from "@/assets/assets"

const RecentTransactions = () => {
  return (
    <div>
        <div className="border rounded-lg">
<div>
    <h3 className="text-[#5D5D5D] pt-4 pl-4">Recent Transactions</h3>
</div>
<div className="flex flex-col">
    <div className="flex items-center gap-4  p-4 relative">
        <img src={assets.tick} alt="Tick icon"  />
        <div className="w-96 ">
            <h1>Waste Purchased</h1>
            <h2 className="text-[#989898]">18 September 2025</h2>
        </div>
        <div className="absolute right-5">
            <h1 className="text-[#006837] font-semibold">N150,000</h1>
        </div>
     </div>

     <div className="flex items-center gap-4  p-4 relative">
        <img src={assets.tick} alt="Tick icon"  />
        <div className="w-96 ">
            <h1>Waste Purchased</h1>
            <h2 className="text-[#989898]">16 September 2025</h2>
        </div>
        <div className="absolute right-5">
            <h1 className="text-[#006837] font-semibold">N50,000</h1>
        </div>
     </div>

     <div className="flex items-center gap-4  p-4 relative">
        <img src={assets.crown} alt="Crown icon"  />
        <div className="w-96 ">
            <h1>Bonus Points Earned</h1>
            <h2 className="text-[#989898]">14 September 2025</h2>
        </div>
        <div className="absolute right-5">
            <h1 className="text-[#006837] font-semibold">+50 Points</h1>
        </div>
     </div>
</div>
        </div>
    </div>
  )
}

export default RecentTransactions