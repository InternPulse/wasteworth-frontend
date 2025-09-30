import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";
const MyProfile = () => {
  return (
    <main className="bg-[#F5F5F5] p- overflow-y-auto h-full w-full">
      <div className="bg-white p-4 rounded-md">
        <ProfileAvatar />
        <ProfileForm />
      </div>
    </main>
  );
};

export default MyProfile;
