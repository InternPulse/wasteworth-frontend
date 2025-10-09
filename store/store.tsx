import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  userId: string;
  name: string | null;
  email: string;
  phone: string | null;
  role: "disposer" | "recycler" | "";
  location: string | null;
  walletBalance: string;
  referralCode: string;
  createdAt: string;
}

export interface NotificationItem {
  createdAt: string;
  id: string;
  is_read: boolean;
  message: string;
  type: string;
  user: {
    id: string;
    name: string;
  };
  userId: string;
}

export interface NotificationType {
  notifications: NotificationItem[];
  length: number;
  status: string;
  pagination: {
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
}

interface Store {
  email: string;
  setEmail: (email: string) => void;
  otp: string | null;
  setOtp: (v: string | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  tokens: {
    access: string;
    refresh_token: string;
  } | null;
  setTokens: (tokens: { access: string; refresh_token: string } | null) => void;
  notificationOpen: boolean;
  toggleNotificationOpen: () => void;
  notifications: NotificationType | null;
  setNotifications: (notifications: NotificationType) => void;

  notificationsLoading: boolean | null;
  setNotificationsLoading: (notificationsLoading: boolean) => void;
}
const defaultUser: User = {
  userId: "",
  name: "",
  email: "",
  phone: "",
  role: "",
  location: "",
  walletBalance: "0",
  referralCode: "",
  createdAt: "",
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      email: "",
      setEmail: (email) => set({ email }),

      otp: null,
      setOtp: (otp) => set({ otp }),

      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

      user: defaultUser,
      setUser: (user) => set({ user }),

      tokens: null,
      setTokens: (tokens) => set({ tokens }),

      notificationOpen: false,
      toggleNotificationOpen: () =>
        set((state) => ({ notificationOpen: !state.notificationOpen })),

      notifications: null,
      setNotifications: (notifications) => set({ notifications }),

      notificationsLoading: null,
      setNotificationsLoading: (notificationsLoading: boolean) =>
        set({ notificationsLoading: notificationsLoading }),
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        email: state.email,
        user: state.user,
        tokens: state.tokens,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

export default useStore;
