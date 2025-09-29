import disposeImg from "../../assets/disposeImg.jpg";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";

const ProfileAvatar = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };
  const handleRemoveProfilePic = () => {
    setSelectedFile(null);
  };
  return (
    <div className="flex items-center md:gap-10 justify-between ">
      <div className="relative inline-block">
        {/* Disposer profile Avatar */}
        <figure className="w-[120.75px] h-[120.75px] rounded-full overflow-hidden border-[0.75px] border-[#3B95614D]">
          <img
            src={disposeImg}
            alt="disposer profile"
            className="w-full h-full object-cover "
          />
        </figure>

        <button
          type="button"
          className="absolute bottom-4 right-1 w-6 h-6 rounded-full bg-[#006837] flex items-center justify-center border-[0.75px] border-white"
        >
          <CiCamera className="text-white text-base" />
        </button>
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
          {selectedFile ? selectedFile.name : "Remove Profile picture"}
        </button>
      </div>
    </div>
  );
};

export default ProfileAvatar;
