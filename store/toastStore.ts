import { create } from 'zustand'

type State = {
  open: boolean
  severity: 'success' | 'error' | 'info' | 'warning'
  message: string
}

type Action = {
  showToast: (
    severity: 'success' | 'error' | 'info' | 'warning',
    message: string,
  ) => void
  hideToast: () => void
}

export const useToast = create<State & Action>((set) => ({
  open: false,
  severity: 'success',
  message: '',
  showToast: (severity, message) => {
    set((s) => ({ ...s, severity: severity, message, open: true }))
  },
  hideToast: () => {
    set((s) => ({ ...s, open: false }))
  },
}))
