import { createBrowserRouter } from "react-router";

import { navGroups } from "@/widget";

import { StubPage } from "./StubPage/StubPage";
import { VerificationRequestsPage } from "./VerificationRequestsPage/VerificationRequestsPage";

const navItems = navGroups.flatMap((group) => group.items);

export const router = createBrowserRouter(
  navItems.map((item) => ({
    path: item.href,
    element: item.implemented ? (
      <VerificationRequestsPage />
    ) : (
      <StubPage title={item.label} />
    ),
  })),
);
