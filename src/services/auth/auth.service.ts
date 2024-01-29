import { supabase } from "../../config/supabaseClient";
import { LoginWithMagicLinkParams } from "./auth.service.types";

export const loginWithMagicLink = async (config: LoginWithMagicLinkParams) => {
  const { email } = config;
  try {
    const response = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "https://noteable-mhatw.vercel.app/",
      },
    });
    if (response.error) {
      throw response.error;
    }
    return response.data;
  } catch (e) {
    const error = e as Error;
    throw error;
  }
};

export const loginWithGithub = async () => {
  try {
    const response = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (response.error) {
      throw response.error;
    }
    return response.data;
  } catch (e) {
    const error = e as Error;
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await supabase.auth.signOut();
    if (response.error) {
      throw response.error;
    }
  } catch (e) {
    const error = e as Error;
    throw error;
  }
};
