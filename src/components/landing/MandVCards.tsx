
const MandVCards = ({ data }: { data: string[][] }) => {

  const MandV = data;
  
  return (
    <div className="my-5 space-y-10  sm:py-8 w-9/10 mx-auto">
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-5 md:gap-10 rounded-lg sm:bg-gray-100/30 sm:py-5 xl:py-10 sm:px-8">
        {MandV.map((m) => (
          <div
            key={m[0]}
            className="flex flex-col justify-center sm:justify-start gap-3 lg:gap-5 sm:bg-transparent p-4 py-10 sm:p-0 shadow sm:shadow-none rounded-lg sm:rounded-none"
          >
            <h1 className="text-green-600 font-semibold text-[1.5rem] sm:text-[1.7rem] xl:text-[2rem] text-center sm:text-left">
              {m[0]}
            </h1>
            <p className="text-gray-800 tracking-wider leading-[1.4rem]  xl:leading-[1.8rem] text-sm sm:text-[0.9rem] xl:text-[1.1rem] text-center sm:text-left">
              {m[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandVCards;
