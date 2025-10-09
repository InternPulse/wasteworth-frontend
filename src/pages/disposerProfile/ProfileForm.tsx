import ProfileInput from "@/components/disposerProfile/ProfileInput";
import { useProfileForm } from "../../components/disposerProfile/useProfileForm";
import LocationFields from "@/components/disposerProfile/LocationFields";

const ProfileForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    handleGetLocation,
    loading,
    message,
  } = useProfileForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[24px] mt-6">
        <ProfileInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="OLOWU"
        />
        <ProfileInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="AANUOLUWAPO"
        />
        <ProfileInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          disabled
        />
        <ProfileInput
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+234 7064000000"
          disabled
        />
      </div>

      <LocationFields
        formData={formData}
        handleChange={handleChange}
        handleGetLocation={handleGetLocation}
      />

      <button
        type="submit"
        disabled={loading}
        className="flex bg-[#006837] w-full items-center justify-center mt-6 h-14 rounded-[6px] border border-[#3B9561] font-poppins font-bold text-base text-white mb-6 cursor-pointer hover:bg-green-600 transition duration-300 ease disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Profile"}
      </button>

      {message && (
        <p className="text-center text-sm font-medium text-gray-700 mt-2">
          {message}
        </p>
      )}
    </form>
  );
};

export default ProfileForm;
