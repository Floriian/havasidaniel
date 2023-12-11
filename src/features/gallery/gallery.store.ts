import { create } from "zustand";

interface GalleryStore {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  isLoading: false,
  setIsLoading: (state: boolean) => set({ isLoading: state }),
}));
