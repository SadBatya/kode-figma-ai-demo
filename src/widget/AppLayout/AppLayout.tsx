import type { CSSProperties, ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/shared/ui";

import { AppHeader } from "../AppHeader/AppHeader";
import { AppSidebar } from "../AppSidebar/AppSidebar";

type Props = {
  children: ReactNode;
  title?: string;
};

export const AppLayout = ({ children, title }: Props) => {
  return (
    <SidebarProvider
      className="h-dvh min-h-0 flex-col bg-background"
      style={{ "--sidebar-width": "280px" } as CSSProperties}
    >
      <AppHeader title={title} />
      <div className="relative flex min-h-0 flex-1 [contain:layout]">
        <AppSidebar />
        <SidebarInset className="overflow-y-auto bg-background">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
