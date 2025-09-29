import { assets } from "@/assets/assets"

const RecentTransactions = () => {
  return (
    <div>
        <div className="border rounded-lg">
<div>
    <h3 className="text-[#5D5D5D] pt-4 pl-4">Recent Transactions</h3>
</div>
<div className="flex flex-col">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4 md:relative items-center">
        <div className="flex gap-4 ">
            <span className="flex justify-center items-center">
                <img src={assets.tick} alt="Tick icon"  />
            </span>
            
        <div className="w-55 md:w-96">
            <h1>Waste Purchased</h1>
            <h2 className="text-[#989898]">18 September 2025</h2>
        </div>
        </div>
        
        <div className="md:absolute md:right-5 pl-8">
            <h1 className="text-[#006837] font-semibold">N150,000</h1>
        </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4 md:relative items-center">
        <div className="flex gap-4 ">
            <span className="flex justify-center items-center">
                <img src={assets.tick} alt="Tick icon"  />
            </span>
            
        <div className="w-55 md:w-96">
            <h1>Waste Purchased</h1>
            <h2 className="text-[#989898]">16 September 2025</h2>
        </div>
        </div>
        
        <div className="md:absolute md:right-5 pl-8">
            <h1 className="text-[#006837] font-semibold">N50,000</h1>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4 md:relative items-center">
        <div className="flex gap-4 ">
            <span className="flex justify-center items-center">
                <img src={assets.tick} alt="Tick icon"  />
            </span>
            
        <div className="w-55 md:w-96">
            <h1>Bonus Points Earned</h1>
            <h2 className="text-[#989898]">14 September 2025</h2>
        </div>
        </div>
        
        <div className="md:absolute md:right-5 pl-8">
            <h1 className="text-[#006837] font-semibold">+50 Points</h1>
        </div>
     </div>
</div>
        </div>
    </div>
  )
}

export default RecentTransactions