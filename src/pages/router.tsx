import type { ComponentType } from "react";
import { createBrowserRouter } from "react-router";

import { navGroups } from "@/widget";

import { CurrencyRatesPage } from "./CurrencyRatesPage/CurrencyRatesPage";
import { PlatformRequisitesPage } from "./PlatformRequisitesPage/PlatformRequisitesPage";
import { StubPage } from "./StubPage/StubPage";
import { VerificationRequestsPage } from "./VerificationRequestsPage/VerificationRequestsPage";

const implementedPages: Record<string, ComponentType> = {
  "/verification-requests": VerificationRequestsPage,
  "/currency-rates": CurrencyRatesPage,
  "/platform-requisites": PlatformRequisitesPage,
};

const navItems = navGroups.flatMap((group) => group.items);

export const router = createBrowserRouter(
  navItems.map((item) => {
    const Page = implementedPages[item.href];

    return {
      path: item.href,
      element: Page ? <Page /> : <StubPage title={item.label} />,
    };
  }),
);
