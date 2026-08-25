import { Link, useLocation } from "react-router";

import logout from "@/shared/assets/icons/logout.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui";

import { navGroups } from "./model/nav-config";

export const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="offcanvas" className="w-[280px] md:shrink-0">
      <SidebarContent className="justify-between gap-0 pt-6 pb-4">
        <div>
          {navGroups.map((navGroup) => (
            <SidebarGroup key={navGroup.title ?? "main"} className="gap-0 py-0">
              {navGroup.title && (
                <SidebarGroupLabel className="h-8 pt-2">
                  {navGroup.title}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {navGroup.items.map((item) => {
                    const isActive = location.pathname === item.href;

                    return (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className="h-auto gap-3 rounded-xl px-4 py-2 text-[16px] font-normal data-active:bg-primary/[0.08] data-active:text-primary"
                        >
                          <Link to={item.href}>
                            <img src={item.icon} alt="" className="size-6" />
                            <span>{item.label}</span>
                            {item.badge && (
                              <SidebarMenuBadge className="static ml-auto rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                                {item.badge}
                              </SidebarMenuBadge>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        <SidebarFooter className="p-0">
          <SidebarGroup className="gap-0 py-0">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="h-auto gap-3 rounded-xl px-4 py-2 text-[16px] font-normal">
                    <img src={logout} alt="" className="size-6" />
                    <span>Выход</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};
