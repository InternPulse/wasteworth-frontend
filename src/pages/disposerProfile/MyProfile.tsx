import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";
const MyProfile = () => {
  return (
    <main className="bg-[#F5F5F5] p-4 overflow-y-auto h-screen w-full ">
      <div className="bg-white p-4 ">
        <ProfileAvatar />
        <ProfileForm />
      </div>
    </main>
  );
};

export default MyProfile;
