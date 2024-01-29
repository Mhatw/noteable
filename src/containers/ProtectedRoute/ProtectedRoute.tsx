import React from "react";
import { ProtectedRouteProps } from "./ProtectedRoute.types.";
import useListenAuth from "@/hooks/useListenerAuth";
import { Toaster } from "@/components/ui/sonner";

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children } = props;
  useListenAuth();
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ProtectedRoute;
