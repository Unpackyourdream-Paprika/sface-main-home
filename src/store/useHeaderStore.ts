import { create } from "zustand";

interface useHeaderStateProps {
  isHeaderState: boolean;
  setIsHeaderState: (state: boolean) => void;
  resetNaviStateStore: () => void;
}

export const useHeaderStateStore = create<useHeaderStateProps>((set) => ({
  isHeaderState: false, // 기본값 (초기 상태)
  setIsHeaderState: (state) => set({ isHeaderState: state }),
  resetNaviStateStore: () =>
    set({
      isHeaderState: false,
    }),
}));
