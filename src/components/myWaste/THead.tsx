const THead = () => {
  return (
    <thead>
      <tr className="bg-[#FAFAFA] text-[14px]">
        <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
          OFFER ID
        </th>
        <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
          WASTE QUANTITY
        </th>
        <th className="border border-gray-300 text-left px-4 py-2">DATE</th>
        <th className="border border-gray-300 text-left px-4 py-2 hidden md:table-cell">
          LOCATION
        </th>
        <th className="border border-gray-300 text-left px-4 py-2">
          ESTIMATED PRICE
        </th>
        <th className="border border-gray-300 text-left px-4 py-2">STATUS</th>
      </tr>
    </thead>
  );
};

export default THead;
