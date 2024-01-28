import { Provider } from "@supabase/supabase-js";

export interface LoginWithMagicLinkParams {
  email: string;
}

export interface LoginWithMagicLinkResponse {
  data: { user: null; session: null; messageId?: string | null } | undefined;
  error: Error;
}

export interface LoginWithGithubParams {}

export interface LoginWithGithubResponse {
  data: { provider: Provider; url: string } | undefined;
  error: Error;
}
