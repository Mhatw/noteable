import React from "react";
import { ProtectedRouteProps } from "./ProtectedRoute.types.";
import useListenAuth from "@/hooks/useListenerAuth";

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children } = props;
  useListenAuth();
  return <>{children}</>;
};

export default ProtectedRoute;
