import ProfileInput from "./ProfileInput";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetLocation: () => void;
}

const LocationFields = ({
  formData,
  handleChange,
  handleGetLocation,
}: Props) => (
  <>
    <ProfileInput
      label="Residential Address"
      name="location"
      value={formData.location}
      onChange={handleChange}
      placeholder="Ikeja, Lagos"
    />

    <div className="grid grid-cols-2 gap-4 mt-4">
      <ProfileInput
        label="Latitude"
        name="lat"
        type="number"
        value={formData.lat}
        onChange={handleChange}
        placeholder="Latitude"
      />
      <ProfileInput
        label="Longitude"
        name="lng"
        type="number"
        value={formData.lng}
        onChange={handleChange}
        placeholder="Longitude"
      />
    </div>

    <button
      type="button"
      onClick={handleGetLocation}
      className="bg-blue-600 text-white w-full mt-4 py-3 rounded-md hover:bg-blue-700 transition"
    >
      Use Current Location
    </button>
  </>
);

export default LocationFields;
