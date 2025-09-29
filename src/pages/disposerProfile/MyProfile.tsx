import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";
const MyProfile = () => {
  return (
    <main className="bg-[#F5F5F5] md:p-10 overflow-y-auto h-screen w-full ">
      <div className="bg-white p-6 ">
        <ProfileAvatar />
        <ProfileForm />
      </div>
    </main>
  );
};

export default MyProfile;
