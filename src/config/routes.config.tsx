import ProtectedRoute from "@/containers/ProtectedRoute/ProtectedRoute";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NotePage from "@/pages/NotePage/NotePage";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NotePage />
      </ProtectedRoute>
    ),
    errorElement: <p>404 Not Found</p>,
  },
  {
    path: "*",
    element: <p>404 Not Found</p>,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
