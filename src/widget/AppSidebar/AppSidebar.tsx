import { Link, useLocation } from "react-router";

import { ChevronsUpDown, LogOut } from "lucide-react";

import logoMainex from "@/shared/assets/icons/logo-mainex.svg";
import {
  Avatar,
  AvatarFallback,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui";

import { navGroups } from "./model/nav-config";

export const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="offcanvas" className="w-[255px]">
      <SidebarHeader className="h-[49px] justify-center border-b border-sidebar-border px-4 py-2">
        <img src={logoMainex} alt="Mainex" className="h-[18px] w-[107px]" />
      </SidebarHeader>

      <SidebarContent className="gap-2 py-2">
        {navGroups.map((navGroup) => (
          <SidebarGroup key={navGroup.title ?? "main"} className="gap-0 p-2">
            {navGroup.title && (
              <SidebarGroupLabel className="h-8 opacity-70">
                {navGroup.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {navGroup.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="h-8 gap-2 rounded-full px-2 text-sm font-normal data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground"
                      >
                        <Link to={item.href}>
                          <Icon className="size-4" />
                          <span>{item.label}</span>
                          {item.badge && (
                            <SidebarMenuBadge className="static ml-auto flex size-5 items-center justify-center rounded-full bg-primary p-0 text-xs font-medium text-primary-foreground">
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
      </SidebarContent>

      <SidebarFooter className="gap-2 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-8 gap-2 rounded-full px-2 text-sm font-normal">
              <LogOut className="size-4" />
              <span>Выход</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="flex items-center gap-2 p-2">
          <Avatar className="size-8 shrink-0">
            <AvatarFallback className="bg-[#bdbdbd] text-xs text-white">
              ИИ
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">
              Иван Иванович
            </p>
            <p className="truncate text-xs text-sidebar-foreground/70">
              Администратор
            </p>
          </div>
          <ChevronsUpDown className="size-4 shrink-0 text-sidebar-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
