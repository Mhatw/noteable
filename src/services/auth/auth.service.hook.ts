import { useMutation } from "@tanstack/react-query";
import { loginWithGithub, loginWithMagicLink, signOut } from "./auth.service";
import { LoginWithGithubResponse } from "./auth.service.types";
import { LoginWithMagicLinkResponse } from "./auth.service.types";
import { LoginWithMagicLinkParams } from "./auth.service.types";
import { defaultErrorMessage } from "@/utils/service.utils";

export const useLoginWithMagicLink = () => {
  return useMutation<
    LoginWithMagicLinkResponse["data"],
    Error,
    LoginWithMagicLinkParams
  >({
    mutationFn: (config) => loginWithMagicLink(config),
    onError(error) {
      defaultErrorMessage(error.message);
    },
  });
};

export const useLoginWithGithub = () => {
  return useMutation<LoginWithGithubResponse["data"], Error, void>({
    mutationFn: loginWithGithub,
    onError(error) {
      defaultErrorMessage(error.message);
    },
  });
};

export const useSignOut = () => {
  return useMutation<void, Error, void>({
    mutationFn: signOut,
    onError(error) {
      defaultErrorMessage(error.message);
    },
  });
};
