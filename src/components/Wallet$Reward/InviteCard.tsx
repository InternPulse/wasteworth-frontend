import { Button } from "../ui/button"
import { assets } from "@/assets/assets"

const InviteCard = () => {
  return (
    <div>
        <div className="md:flex justify-between align-center items-center border p-4 rounded-lg bg-gradient-to-r from-[#043015] to-[#006837]">
            <div>
                <div className="text-white font-bold">Invite Friends. Earn Rewards</div>
                <div className="text-[#A9A9A9]">Get up to 150 Points + Cash Bonuses when your friends join and recycle.</div>
            </div>
            <div className="mt-4 md:mt-auto">
                <Button variant="outline" className="text-[#006837]">Invite & Earn <img src={assets.rightArrow} sizes="1" alt="right arrow" /></Button>
            </div>
        </div>
    </div>
  )
}

export default InviteCard