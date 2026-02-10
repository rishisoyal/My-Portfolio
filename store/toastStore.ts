import { create } from "zustand";

type Severity = "success" | "error" | "info" | "warning";

type State = {
  open: boolean;
  severity: Severity;
  message: string;
};

type Action = {
  showToast: (severity: Severity, message: string) => void;
  hideToast: () => void;
};

export const useToast = create<State & Action>((set) => ({
  open: false,
  severity: "success",
  message: "",
  showToast: (severity, message) => {
    set({ severity: severity, message, open: true });
  },
  hideToast: () => {
    set({ open: false });
  },
}));
