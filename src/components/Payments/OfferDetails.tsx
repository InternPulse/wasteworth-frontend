

const OfferDetails = () => {
  return (
    <div>
        {/* Offer Details */}
        <div className="bg-white rounded-xl shadow p-6 ">
          <h2 className="text-lg font-semibold mb-2 text-[#5D5D5D]">Offer Details</h2>
          
          <div className="space-y-6  text-sm border rounded-sm p-4 md:flex md:justify-evenly md:gap-12 md:overflow-x-scroll lg:overflow-hidden ">
            <p className="flex justify-between md:flex-col">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Offer Id <span className="md:hidden">:</span></span> 
              <h1 className="text-[#575757] font-medium">#23344</h1>
            </p>
            <p className="flex justify-between md:flex-col">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Offer Price:</span> 
              <h1 className="text-[#575757] font-medium">N4,000</h1>
            </p>
            <p className="flex justify-between md:flex-col ">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Listing Price:</span> 
              <h1 className="text-[#575757] font-medium">N20,000</h1>
            </p>
            <p className="flex justify-between md:flex-col">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Location:</span> 
              <h1 className="text-[#575757] font-medium">Ikoyi</h1>
            </p>
            <p className="flex justify-between md:flex-col">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Date Listed:</span> 
              <h1 className="text-[#575757] font-medium">12/09/2025</h1>
            </p>
            <p className="flex justify-between md:flex-col md:gap-2">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Quantity:</span> 
              <h1 className="text-[#575757] font-medium">5Kg</h1>
            </p>
            <p className="flex justify-between md:flex-col">
              <span className="text-[#5D5D5D] font-normal whitespace-nowrap">Status:</span>
              <h1 className="text-blue-600 font-normal pb-6">Accepted</h1>
            </p>
          </div>
        </div>


      
    </div>
  )
}

export default OfferDetails