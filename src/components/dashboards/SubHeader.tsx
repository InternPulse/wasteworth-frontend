import { FaArrowLeft, FaGift, FaUser } from "react-icons/fa";


export default function SubHeader() {
  return (
    <nav className="px-5 py-2 bg-white">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
                  <FaArrowLeft />
                  <h3>Title</h3>
            </div>
            <div className="flex items-center space-x-5">
                <div className="flex items-center space-x-3 bg-[#FFEFDA] rounded-md px-3 py-1">
                    <span className="bg-white p-2 rounded-full"><FaGift size={15} className="text-[#FB8C00]"/></span>
                    <p className="text-black">25 <span className="text-[#847E7E]">Points</span></p>
                </div>
                <div className="flex items-center space-x-3">
                    <FaUser size={30} className="rounded-full"/>
                    <p>user Name</p>
                </div>
            </div>
        </div>
    </nav>
  )
}
