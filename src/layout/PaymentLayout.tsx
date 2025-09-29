import { ArrowLeft } from 'lucide-react'
import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import MakePayments from '@/pages/Payments/MakePayments'

const PaymentLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#F4F4F4]">
      {/* Navbar */}
      <nav className="bg-white flex items-center fixed top-0 left-0 right-0 h-16 z-20 px-4 md:px-8">
        <div className="flex items-center">
          <Button variant="ghost" className="flex gap-2 items-center p-0">
            <ArrowLeft /> <span className="text-sm">Back</span>
          </Button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img src={assets.logo} alt="Logo" />
        </div>
      </nav>

      <main className="pt-20 p-4 px-6">
        {/* center content and limit max width to avoid overflow on small screens */}
        <div className="max-w-5xl w-full mx-auto">
          <MakePayments />
        </div>
      </main>
    </div>
  )
}

export default PaymentLayout