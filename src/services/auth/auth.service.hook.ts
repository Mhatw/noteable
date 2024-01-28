import { useMutation } from "@tanstack/react-query";
import { loginWithGithub, loginWithMagicLink, signOut } from "./auth.service";
import {
  LoginWithGithubResponse,
  LoginWithMagicLinkResponse,
} from "./auth.service.types";
import { LoginWithMagicLinkParams } from "./auth.service.types";

export const useLoginWithMagicLink = () => {
  return useMutation<
    LoginWithMagicLinkResponse["data"],
    Error,
    LoginWithMagicLinkParams
  >({
    mutationFn: (config) => loginWithMagicLink(config),
  });
};

export const useLoginWithGithub = () => {
  return useMutation<LoginWithGithubResponse["data"], Error, void>({
    mutationFn: loginWithGithub,
  });
};

export const useSignOut = () => {
  return useMutation<void, Error, void>({
    mutationFn: signOut,
  });
};
