import { FaCheck } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useStore from "../../../store/store";
import { useFetch } from "@/hooks/useFetch";

const Notification = () => {
  const { toggleNotificationOpen } = useStore();
  const { data } = useFetch(
    "https://wasteworth-backend-express.onrender.com/api/v1/notifications"
  );
  //const { id, userId, type, message, is_read, createdAt, user } = data;

  console.log(data);
  return (
    <div className="inset-0 fixed top-0 left-0 z-9999 flex items-center justify-center bg-black/50">
      <div className="w-sm h-115 rounded-lg overflow-hidden py-2 bg-white flex flex-col">
        {/* Head */}
        <div className="flex justify-between items-center p-3 border-b-3 border-gray-200">
          <p className="font-bold text-gray-800">Notifications</p>
          <IoMdCloseCircleOutline
            onClick={toggleNotificationOpen}
            className="size-5 text-gray-600 cursor-pointer"
          />
        </div>
        {/* Data */}
        <div
          className="flex flex-col p-3 gap-2 overflow-y-scroll"
          style={{ scrollbarWidth: "thin" }}
        >
          {(data?.notifications &&
            data?.notifications.length > 0 &&
            data?.notifications.map((notification: any, i: number) => (
              <div
                key={i}
                className={`flex items-center gap-5 ${
                  !notification.is_read && notification.type === "marketplace"
                    ? "bg-green-100/70"
                    : ""
                }  px-4 py-2 rounded`}
              >
                <div className="main-bg p-1 rounded-full">
                  <FaCheck className="text-white size-1.5" />
                </div>
                <div className="">
                  <h4 className="font-semibold">{notification.message}</h4>
                  <p className="text-gray-500 text-xs">
                    {notification.createdAt}
                  </p>
                </div>
              </div>
            ))) || (
            <div className="flex items-center justify-center p-10">
              <h3>No data here yet</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
