import { Card } from "../ui/card"
import { assets } from "@/assets/assets"
import { Button } from "../ui/button"
import { CreditCard,Banknote,Landmark,Database    } from "lucide-react"

const PaymentMethod = () => {
  return (
    <div className="pt-4">
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
                <h1 className="font-semibold mb-2">Payment Method</h1>
                <div className="text-[#5D5D5D] flex flex-col gap-2 text-sm">
                    <Button size="lg" variant="outline" className="flex justify-start"> <CreditCard/> Pay with Card</Button>
                    <Button size="lg" variant="outline" className="flex justify-start"> <Banknote/> Pay with Paystack</Button>
                    <Button size="lg" variant="outline" className="flex justify-start"> <Landmark/> Pay with Bank Transfer</Button>
                    <Button size="lg" variant="outline" className="flex justify-start"> <Database/> Pay with Points</Button>
                </div>
                <div className="mt-4">
                    <Button size="lg" className="bg-[#006837] hover:bg-[#3B9561] w-full">Make Payment</Button>
                </div>
            </div>
           
        </Card>
    </div>
  )
}

export default PaymentMethod
