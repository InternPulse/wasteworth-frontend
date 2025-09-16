const MandVCards = ({ data }: { data: string[][] }) => {
  const MandV = data;
  return (
    <div className="grid grid-cols-2 gap-5 md:gap-10">
      {MandV.map((m) => (
        <div key={m[0]} className="flex flex-col gap-2">
          <h1 className="text-teal-600 font-semibold text-lg">{m[0]}</h1>
          <p className="text-gray-600 font-[500] text-[0.8rem]">{m[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default MandVCards;
