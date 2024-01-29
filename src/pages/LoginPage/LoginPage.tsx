import { useState } from "react";
import { useLoginWithMagicLink } from "../../services/auth/auth.service.hook";
import { useLoginWithGithub } from "../../services/auth/auth.service.hook";
import { toast } from "sonner";
import Button from "@/components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutateAsync: loginWithMagicLink } = useLoginWithMagicLink();
  const { mutateAsync: loginWithGithub } = useLoginWithGithub();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginWithMagicLink({
        email,
      });
      toast("🎉 We sent you a magic link to your email", {
        description: "Please check your inbox and follow the instructions.",
        action: {
          label: "Nice!🤩",
          onClick: () => {},
        },
        duration: 10000,
      });
    } catch (e) {
      const error = e as Error;
      toast("🤔 Something went wrong", {
        description: error.message,
        action: {
          label: "Undo",
          onClick: () => {},
        },
        duration: 10000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    try {
      await loginWithGithub();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login with magic link
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primaryC-600 focus:border-primaryC-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <Button
                onClick={() => {}}
                type="submit"
                className="w-full"
                variant="primary"
                isLoading={loading}
              >
                Sign in
              </Button>
              <div className="flex items-center justify-between">
                <span className="w-1/5 border-b md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  or login with
                </a>
                <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
            </form>
            <Button
              onClick={handleGithubLogin}
              className="w-full"
              variant="github"
              isLoading={loading}
            >
              Github
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
