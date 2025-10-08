import { assets } from "../../assets/assets";

const Partners = () => {
  return (
    <section className="py-2 md:py-5 px-5 md:px-10 flex flex-col items-center justify-center gap-3 mt-10">
      <h2 className="text-green-600 text-xl md:text-2xl text-center font-semibold mb-5">
        Our Partners
      </h2>
      <div className="w-full overflow-x-hidden">
        <div className="flex items-center justify-around gap-2 scroll">
          {[
            assets.uba,
            assets.bolt,
            assets.zenith,
            assets.mobnia,
            assets.sterling,
            assets.fcmb,
            assets.nb,
            assets.chowdeck,
            assets.ehealth,
            assets.dano,
            assets.peak,
            assets.alat,
          ].map((img, i) => (
            <img
              src={img}
              key={i}
              className="w-8 sm:w-10 md:w-12 object-fit"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
