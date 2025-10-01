import ProfileForm from "../../components/collectorProfile/ProfileForm";
import SubHeader from "../../components/dashboards/SubHeader";


export default function CollectorProfile() {
  return (
    <div>
      <SubHeader
        title="My Profile"
        points={25}
        initial="G"
        user="Gogo Benson"
      />
      <div className="min-h-screen p-2 space-y-5 w-full pt-22 px-2 sm:px-5 pb-10">
          <ProfileForm />
      </div>
    </div>
  )
}
