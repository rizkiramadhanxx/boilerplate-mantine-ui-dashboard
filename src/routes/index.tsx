import NotFound from "@/components/page/page-not-found";
import AuthenticationRoutes from "@/routes/authentication";
import { BrowserRouter, useRoutes } from "react-router";
import MasterDataRoutes from "@/routes/master-data";

function AllRoutes() {
  const routes = useRoutes([
    ...AuthenticationRoutes,
    ...MasterDataRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}
export default function RoutesGlobal() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
