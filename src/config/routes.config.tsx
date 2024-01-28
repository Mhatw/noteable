import App from "@/App";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404 Not Found</p>,
  },
  {
    path: "*",
    element: <p>404 Not Found</p>,
  },
]);

export default router;
