import { create } from "zustand";

interface Store {
  email: string;
  setEmail: (email: string) => void;
}
const useStore = create<Store>((set) => ({
  email: "",
  setEmail: (email) => set((state) => ({ email })),
}));
export default useStore;
