import { create } from "zustand";

interface Store {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}
const useStore = create<Store>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  toggleSidebar: () =>
    set((state: { sidebarOpen: boolean }) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
}));
export default useStore;
