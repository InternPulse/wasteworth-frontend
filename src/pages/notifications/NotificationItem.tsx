import { FaCheck, FaTrash } from "react-icons/fa";
import { useDelete } from "@/hooks/useDelete";
import { usePatch } from "@/hooks/usePatch";

const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

interface NotificationItemProps {
  notification: any;
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>;
}

const NotificationItem = ({
  notification,
  setNotifications,
}: NotificationItemProps) => {
  const { loading: deleting, deleteData } = useDelete();
  const { loading: patching, patch } = usePatch();

  //Mark as read
  const handleMarkAsRead = async (id: string) => {
    // delete frontend
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
    );

    // Call backend
    await patch(`${BASE_URL}/api/v1/notifications/${id}`, { is_read: true });
  };

  //Delete notification
  const handleDelete = async (id: string) => {
    // Call frontend
    setNotifications((prev) => prev.filter((n) => n.id !== id));

    // Call backend
    await deleteData(`${BASE_URL}/api/v1/notifications/${id}`);
  };

  return (
    <div
      onClick={() => handleMarkAsRead(notification.id)} //PATCH when clicked
      className={`flex relative items-center gap-3 cursor-pointer ${
        !notification.is_read && notification.type === "marketplace"
          ? "bg-green-100/70"
          : !notification.is_read && notification.type === "pickup"
          ? "bg-blue-100/70"
          : !notification.is_read && notification.type === "reward"
          ? "bg-teal-100/70"
          : !notification.is_read && notification.type === "general"
          ? "bg-indigo-100/70"
          : "bg-transparent"
      } px-4 py-2 rounded transition duration-200 hover:bg-gray-100`}
    >
      <div className="main-bg p-1 rounded-full">
        <FaCheck className="text-white size-1.5" />
      </div>
      <div className="flex-1">
        <h4
          className={`font-semibold ${
            notification.is_read ? "text-gray-500" : "text-gray-800"
          }`}
        >
          {notification.message}
        </h4>
        <p className="text-gray-500 text-xs">{notification.createdAt}</p>
      </div>

      <FaTrash
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(notification.id);
        }}
        className={`absolute top-1/3 right-3 text-red-600 hover:text-red-500 hover:scale-105 transition duration-300 cursor-pointer ${
          (deleting || patching) && "pointer-events-none opacity-50"
        }`}
      />
    </div>
  );
};

export default NotificationItem;
