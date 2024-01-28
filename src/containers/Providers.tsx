import { RouterProvider } from "react-router-dom";

import router from "../config/routes.config";

const Providers: React.FC = () => {
  return <RouterProvider router={router} />;
};

Providers.defaultProps = {};

export default Providers;
