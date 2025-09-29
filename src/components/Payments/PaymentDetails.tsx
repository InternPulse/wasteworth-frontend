import { assets } from "@/assets/assets"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

const PaymentDetails = () => {
  return (
    <div className=" pt-4">
        <Card >
            <div className="flex ">
             <div className="flex justify-center items-center w-1/5 ">
                <img src={assets.collect3} alt="" className="rounded-full h-12 w-12 "/>
            </div>
            <div>
                <h1 className="font-semibold text-md">PET Sacks - 5Kg</h1>
                <p className="text-[#5D5D5D] font-normal text-sm"><span>Price:</span> <span>#23344</span></p>
            </div>
            </div>
            <div className="px-6">
                <Button size="lg" className="w-full bg-[#006837] hover:bg-[#3B9561]">Make Payment</Button>
            </div>
            <div className="px-6">
                <h1 className="font-semibold mb-2">Payment Details</h1>
                <div className="text-[#5D5D5D] flex flex-col gap-2 text-sm">
                    <p><span>Estimated Market Price</span> • <span>N20,000</span></p>
                     <p><span>Your Offer</span> • <span>N20,000</span></p>
                      <p className="text-black"><span>Total to Pay</span> • <span>N20,000</span></p>
                </div>
            </div>
           
        </Card>
    </div>
  )
}

export default PaymentDetails