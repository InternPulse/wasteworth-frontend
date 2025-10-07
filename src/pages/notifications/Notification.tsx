import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useStore from "../../../store/store";
import { useFetch } from "@/hooks/useFetch";
import NotificationItem from "./NotificationItem";

const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

const Notification = () => {
  const { toggleNotificationOpen } = useStore();
  const { data, loading } = useFetch(`${BASE_URL}/api/v1/notifications`);

  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (data?.notifications) {
      setNotifications(data.notifications);
    }
  }, [data]);

  return (
    <div className="inset-0 fixed top-0 left-0 z-9999 flex items-center justify-center bg-black/50">
      <div className="w-sm h-115 rounded-lg overflow-hidden py-2 bg-white flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b-3 border-gray-200">
          <p className="font-bold text-gray-800">Notifications</p>
          <IoMdCloseCircleOutline
            onClick={toggleNotificationOpen}
            className="size-5 text-gray-600 cursor-pointer"
          />
        </div>

        {/* Body */}
        <div
          className="flex flex-col p-3 gap-2 overflow-y-scroll"
          style={{ scrollbarWidth: "thin" }}
        >
          {loading ? (
            <div className="w-full text-center">Loading...</div>
          ) : notifications && notifications.length > 0 ? (
            notifications.map((notification, i) => (
              <NotificationItem
                key={notification.id || i}
                notification={notification}
                setNotifications={setNotifications}
              />
            ))
          ) : (
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
