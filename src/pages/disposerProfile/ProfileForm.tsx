import useStore from "../../../store/store";

const ProfileForm = () => {
  const { user } = useStore();
  /* {
    "name": "Updated Name",
    "address_location": { 
        "lat": 40.7128,
        "lng": -74.0060
    }
} */
  return (
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[24px] mt-6">
        <div>
          <label
            htmlFor="lastName"
            className="block font-poppins font-semibold text-base"
          >
            Last Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={user?.name?.split(" ")[0]}
            placeholder="OLOWU"
            className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block font-poppins font-semibold text-base"
          >
            First Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={user?.name?.split(" ")[1]}
            placeholder="AANUOLUWAPO"
            className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-poppins font-semibold text-base"
          >
            Email
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user?.email}
            placeholder="rachaelaanuoluwapo@gmail.com"
            className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block font-poppins font-semibold text-base"
          >
            Mobile Number
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={user?.phone?.toString()}
            placeholder="+234 7064000000"
            className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="sex"
            className="block font-poppins font-semibold text-base"
          >
            Gender
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex gap-6 mt-2">
            <div className="p-4 rounded-[6px] border-[1px] border-[#DFE1E0] accent-emerald-700">
              <input type="radio" name="sex" id="male" value="male" />
              <span className="text-[#000000] ml-2 text-[14px] font-normal font-poppins">
                Male
              </span>
            </div>
            <div className="p-4 rounded-[6px] border-[1px] border-[#DFE1E0] accent-emerald-700">
              <input type="radio" name="sex" id="female" value="female" />
              <span className="text-[#000000] ml-2 text-[14px] font-normal font-poppins">
                Female
              </span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="number"
            className="block font-poppins font-semibold text-base"
          >
            ID (NIN)
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="1234 5678 9012 3456"
            className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2 "
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="address"
          className="block font-poppins font-semibold text-base mt-6"
        >
          Residential Address
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="address"
          name="address"
          id="address"
          value={user?.location?.toString()}
          placeholder="Ikeja, Lagos"
          className="w-full p-4 border-[1px] border-[#DFE1E0] rounded-[6px] mt-2 mb-6"
        />
      </div>
      <button
        type="submit"
        className=" flex bg-[#006837] w-full text-center items-center justify-center mt-2 h-14 rounded-[6px] border-[1px] border-[#3B9561] font-poppins font-bold text-base text-white mb-6 cursor-pointer hover:bg-green-600 transition duration-300 ease"
      >
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;
