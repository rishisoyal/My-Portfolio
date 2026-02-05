import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useTheme, useToast } from "@/store";

export default function ToastNotification() {
  const { hideToast, open, severity, message } = useToast();
  const { isDark } = useTheme();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    hideToast();
  };

  return (
    <div className="z-999999">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{
            width: "100%",
            border: `2px solid ${severity === "success" ? "#7287fd" : severity === "error" ? "#d20f39" : ""}`,
            backgroundColor: `${severity === "success" ? "#7287fd82" : severity === "error" ? "#d20f3982" : ""}`,
            boxShadow: `0px 0px 20px 2px ${severity === "success" ? "#7287fd44" : severity === "error" ? "#d20f3952" : ""}`,
            color: isDark ? "#cdd6f4" : "#111111",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
