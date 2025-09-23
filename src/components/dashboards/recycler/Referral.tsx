import { FaArrowRight } from "react-icons/fa";



export default function Referral() {
  return (
    <div className="bg-gradient-to-r from-[#043015] to-[#006837] rounded-md p-8">
        <div className="flex items-center justify-between">
              <div className="text-white space-y-3 font-semibold">
                  <h3>Invite friends. Earn rewards.</h3>
                  <p className="text-gray-400">Get up to 150 Points + Cash Bonuses when your friends join and recycle.</p>
              </div>
              <button className="flex items-center gap-2 bg-[#F5F5F5] rounded-md p-2 text-[#006837] font-bold">
                  Invite & Earn 
                  <FaArrowRight size={18}/>
              </button>
        </div>
    </div>
  )
}
