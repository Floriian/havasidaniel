import { create } from "zustand";

interface AppStore {
  dark: boolean;
  toggle: () => void;
  setDarkMode: (state: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  dark: false,
  toggle: () => set((state) => ({ dark: !state.dark })),
  setDarkMode: (payload) => set((state) => ({ dark: payload })),
}));
