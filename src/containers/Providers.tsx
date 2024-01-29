import { RouterProvider } from "react-router-dom";

import router from "../config/routes.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/reactQuery.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
