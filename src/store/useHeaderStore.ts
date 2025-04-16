import { create } from "zustand";

interface useHeaderStateProps {
  isHeaderState: boolean;
  isResponsive: string;
  setIsHeaderState: (state: boolean) => void;
  setIsResponsive: (state: string) => void;
  resetNaviStateStore: () => void;
}

export const useHeaderStateStore = create<useHeaderStateProps>((set) => ({
  isHeaderState: false, // 기본값 (초기 상태)
  isResponsive: "desktop",
  setIsHeaderState: (state) => set({ isHeaderState: state }),
  setIsResponsive: (state) => set({ isResponsive: state }),
  resetNaviStateStore: () =>
    set({
      isHeaderState: false,
    }),
}));
