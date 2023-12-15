import { create } from "zustand";

interface AppProps {
  isInLanding: boolean;
  setIsLanding: (value: boolean) => void;
  activeArticle: "landing" | "gallery" | "contacts";
  setActiveArticle: (value: "landing" | "gallery" | "contacts") => void;
}

export const useAppStore = create<AppProps>((set) => ({
  isInLanding: true,
  setIsLanding: (value: boolean) => set({ isInLanding: value }),
  activeArticle: "landing",
  setActiveArticle: (value: "landing" | "gallery" | "contacts") => set({ activeArticle: value })
}));
