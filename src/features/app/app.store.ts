import { create } from "zustand";

interface AppProps {
  isInLanding: boolean;
  setIsLanding: (value: boolean) => void;
}

export const useAppStore = create<AppProps>((set) => ({
  isInLanding: false,
  setIsLanding: (value: boolean) => set({ isInLanding: value }),
}));
