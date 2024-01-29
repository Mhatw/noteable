import { toast } from "sonner";

export const defaultErrorMessage = (message: string) => {
  toast("🤔 Something went wrong", {
    description: message,
    action: {
      label: "Undo",
      onClick: () => {},
    },
    duration: 10000,
  });
};
