import { create } from "zustand";

interface User {
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
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: User;
  setUser: (user: User) => void;
  tokens: {
    access: string;
    refresh: string;
  };
  setTokens: (tokens: { access: string; refresh: string }) => void;
}
const useStore = create<Store>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  /* Authentication status */
  isLoggedIn: true,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

  /* Data */
  user: {
    createdAt: "2025-09-18T06:37:08.116690Z",
    email: "tofexzyno@gmail.com",
    location: null,
    name: null,
    phone: null,
    referralCode: "GWB4ZFT7",
    role: "recycler",
    userId: "0d6de97d-3c22-4283-a29c-dcff680b74f4",
    walletBalance: "0.00",
  },
  setUser: (user) => set({ user }),

  /* Authentication requirements */
  tokens: {
    access: "",
    refresh: "",
  },
  setTokens: (tokens) => set({ tokens }),
}));
export default useStore;
