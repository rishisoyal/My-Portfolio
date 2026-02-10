import { create } from "zustand";

type State = {
  isDark: boolean;
};

type Action = {
  toggleTheme: () => void;
  setIsdark: (newVal: boolean) => void;
};

export const useTheme = create<State & Action>((set, get) => ({
  isDark: true,
  toggleTheme: () => {
    if (get().isDark) {
      set({ isDark: false });
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", "light");
    } else {
      set({ isDark: true });
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  },
  setIsdark: (newVal) => {
    set({ isDark: newVal });
  },
}));
