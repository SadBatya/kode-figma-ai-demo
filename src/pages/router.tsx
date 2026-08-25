import { createBrowserRouter } from "react-router";

import { HomePage } from "./HomePage/HomePage";
import { VerificationRequestsPage } from "./VerificationRequestsPage/VerificationRequestsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/verification-requests",
    Component: VerificationRequestsPage,
  },
]);
