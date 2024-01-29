import { useEffect } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const useListenAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") return;
      const currentUser = session?.user;
      console.log("🚀 ~ currentUser:", currentUser);
      if (currentUser) {
        navigate("/");
      }
      if (!currentUser) {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);
};

export default useListenAuth;
