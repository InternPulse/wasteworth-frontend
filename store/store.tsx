import { create } from "zustand";

export interface User {
  userId: string;
  name: string | null;
  email: string;

  phone: string | null;
  role: string;
  location: string | null;
  walletBalance: string;
  referralCode: string;
  createdAt: string;
}
interface Store {
  email: string;
  setEmail: (email: string) => void;
  otp: string | null;
  setOtp: (v: string | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User;
  setUser: (user: User) => void;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
  setTokens: (tokens: { access_token: string; refresh_token: string }) => void;
  notificationOpen: boolean;
  toggleNotificationOpen: () => void;
}

const useStore = create<Store>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  otp: null,
  setOtp: (otp) => set({ otp }),

  /* Authentication status */
  isLoggedIn: true,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

  /* Data */
  user: JSON.parse(localStorage.getItem("userData") || "{}").user || "",
  setUser: (user) => set({ user }),

  /* Authentication requirements */
  tokens: JSON.parse(localStorage.getItem("tokens") || "{}").user || "",
  setTokens: (tokens) => set({ tokens }),
  notificationOpen: false,
  toggleNotificationOpen: () =>
    set((state) => ({ notificationOpen: !state.notificationOpen })),
}));

export default useStore;
