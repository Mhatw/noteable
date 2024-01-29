import { NavbarProps } from "./NavBar.types";
// import Brand from "../Brand/Brand";
// import { scrollToQuerySelector } from "helpers/scroll.helpers";
import Button from "../Button/Button";
import { useSignOut } from "@/services/auth/auth.service.hook";
import { toast } from "sonner";
import { useState } from "react";

const NavBar: React.FC<NavbarProps> = () => {
  const { mutateAsync: signOut } = useSignOut();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      toast("🎉 You have been logged out", {
        description: "See you soon!",
        action: {
          label: "Bye!👋",
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

  return (
    <header
      id="header"
      className=" min-w-full w-full sticky top-0 z-50 shadow-sm bg-note-gray6"
    >
      <nav className="top-0 z-50 w-full md:static md:text-sm">
        <div className="flex items-center justify-between py-3 md:py-5 mx-auto">
          <h2 className="text-2xl font-bold text-note-gray1">My Notes</h2>
          <Button
            onClick={handleSignOut}
            size="sm"
            variant="danger"
            isLoading={loading}
          >
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
