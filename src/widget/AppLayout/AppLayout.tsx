import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/shared/ui";

import { AppHeader } from "../AppHeader/AppHeader";
import { AppSidebar } from "../AppSidebar/AppSidebar";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <AppHeader />
      <SidebarProvider className="min-h-0 flex-1">
        <AppSidebar />
        <SidebarInset className="overflow-y-auto bg-background">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
