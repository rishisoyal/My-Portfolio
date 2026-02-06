import { create } from "zustand";

type State = {
  customCursorOn: boolean;
};

type Action = {
  toggleCursor: () => void;
};

export const useCursor = create<State & Action>((set, get) => ({
  customCursorOn: true,
  toggleCursor: () => {
    if (get().customCursorOn) {
      set((s) => ({ ...s, customCursorOn: false }));
      localStorage.setItem("cursor", "default");
    } else {
      set((s) => ({ ...s, customCursorOn: true }));
      localStorage.setItem("cursor", "custom");
    }
  },
}));
