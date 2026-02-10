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
      set({ customCursorOn: false });
      localStorage.setItem("cursor", "default");
    } else {
      set({ customCursorOn: true });
      localStorage.setItem("cursor", "custom");
    }
  },
}));
