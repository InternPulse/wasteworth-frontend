interface ProfileInputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const ProfileInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}: ProfileInputProps) => (
  <div>
    <label className="block font-poppins font-semibold text-base">
      {label}
      {!disabled && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full p-4 border border-[#DFE1E0] rounded-[6px] mt-2 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

export default ProfileInput;
