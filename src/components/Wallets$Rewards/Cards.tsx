import { assets } from "../../assets/assets";
const Cards = () => {
  const cardDetails = [
    {
      id: 1,
      title: "Eco Points",
      icon: assets.points,
      number: 400,
      bgColor: "#FFEFDA",
    },
    {
      id: 2,
      title: "Airtime Tokens",
      icon: assets.token,
      number: 6,
      bgColor: "#F4F4F4",
    },
    {
      id: 3,
      title: "Wallet Balance",
      icon: assets.balance,
      number: "coming soon",
      bgColor: "#F5F5F5",
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardDetails.map((card) => (
          <div
            key={card.id}
            style={{ backgroundColor: card.bgColor }}
            className="h-35 flex flex-col justify-center gap-2 rounded-md px-5"
          >
            <div className="flex justify-between items-center align-center ">
              <span className="text-[#535353]">
                <h2>{card.title}</h2>
              </span>
              <span className="w-8">
                {" "}
                <img src={card.icon} sizes="1" alt="token icon" />
              </span>
            </div>

            <div>
              <h2 className="font-bold text-2xl">{card.number}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
