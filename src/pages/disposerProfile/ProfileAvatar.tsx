import disposeImg from "../../assets/disposeImg.jpg";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";

const ProfileAvatar = () => {
  const [selectedFile, setSelectedFile] = useState<string | undefined>(
    disposeImg
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };
  const handleRemoveProfilePic = () => {
    setSelectedFile(undefined);
  };
  return (
    <div className="flex items-center md:gap-10 justify-between ">
      <div className="relative inline-block  rounded-full w-[120.75px] h-[120.75px]">
        {/* Disposer profile Avatar */}
        {selectedFile === undefined ? (
          <div className="border h-full w-full rounded-full bg-gray-400 animate-pulse"></div>
        ) : (
          <img
            src={selectedFile}
            className="w-full h-full accept-image/* rounded-full border-2 border-gray-400 object-cover"
          />
        )}

        <label
          htmlFor="fileInput"
          className="absolute bottom-4 right-1 w-6 h-6 rounded-full bg-[#006837] flex items-center justify-center hover:bg-[#309867] transition duration-300"
        >
          <CiCamera className="text-white text-base" />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          type="button"
          className="w-40 md:w-[247px] md:h-14 rounded-xl bg-[#006837] text-white font-poppins font-semibold md:text-base cursor-pointer text-sm text-nowrap  h-10"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          Change profile picture
        </button>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleRemoveProfilePic}
          className="w-40 md:w-[247px] h-10 md:h-14 rounded-xl outline-1 text-[#222222] bg-[#F5F5F5] outline-[#3B9561] font-poppins font-semibold text-sm text-nowrap md:text-base cursor-pointer"
        >
          Remove Profile picture
        </button>
      </div>
    </div>
  );
};

export default ProfileAvatar;
