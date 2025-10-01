import { Button } from "../ui/button"
import { assets } from "@/assets/assets"

const QuickActions = () => {
  return (
    <div>
        <div className="border rounded-md p-2 px-4">
            <div className="pb-4">
                 <h2 className="text-[#5D5D5D]"> Quick Actions</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-[#3D3A3A]">
                <Button variant="secondary" className="py-5 text-xs md:text-sm hover:shadow-md transition-shadow duration-200"> <img src={assets.shoppingCard} alt="shpping Cart" /> My Waste</Button>
                <Button variant="secondary" className="py-5 text-xs md:text-sm hover:shadow-md transition-shadow duration-200"> <img src={assets.award} alt="vector" /> Claim Badge</Button>
                <Button variant="secondary" className="py-5 text-xs md:text-sm hover:shadow-md transition-shadow duration-200"> <img src={assets.crown} alt="Crown icon" /> Invite to Earn</Button>
                <Button variant="secondary" className="py-5 text-xs md:text-sm hover:shadow-md transition-shadow duration-200"> <img src={assets.cardAdd} alt="Card-Add" /> Withdraw Funds</Button>
            </div>
        </div>
    </div>
  )
}

export default QuickActions