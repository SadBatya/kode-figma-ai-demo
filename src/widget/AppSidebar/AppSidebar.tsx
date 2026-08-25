import { Link, useLocation } from "react-router";

import accountBalance from "@/shared/assets/icons/account-balance.svg";
import assignmentLate from "@/shared/assets/icons/assignment-late.svg";
import barChart from "@/shared/assets/icons/bar-chart.svg";
import changeCircle from "@/shared/assets/icons/change-circle.svg";
import currencyExchange from "@/shared/assets/icons/currency-exchange.svg";
import dataThresholding from "@/shared/assets/icons/data-thresholding.svg";
import docs from "@/shared/assets/icons/docs.svg";
import group from "@/shared/assets/icons/group.svg";
import howToReg from "@/shared/assets/icons/how-to-reg.svg";
import listAlt from "@/shared/assets/icons/list-alt.svg";
import logout from "@/shared/assets/icons/logout.svg";
import manageAccounts from "@/shared/assets/icons/manage-accounts.svg";
import paid from "@/shared/assets/icons/paid.svg";
import personEdit from "@/shared/assets/icons/person-edit.svg";
import spaceDashboard from "@/shared/assets/icons/space-dashboard.svg";
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

type NavItem = {
  label: string;
  icon: string;
  href?: string;
  badge?: number;
};

type NavGroup = {
  title?: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    items: [
      { label: "Дашборд кошельков", icon: spaceDashboard },
      { label: "Курсы валют", icon: currencyExchange },
    ],
  },
  {
    title: "Транзакции:",
    items: [
      { label: "На подтверждение", icon: assignmentLate },
      { label: "Список ордеров", icon: listAlt },
    ],
  },
  {
    title: "Клиенты:",
    items: [
      {
        label: "Заявки на верификацию",
        icon: howToReg,
        href: "/verification-requests",
        badge: 5,
      },
      { label: "Список клиентов", icon: group },
    ],
  },
  {
    title: "Настройки:",
    items: [
      { label: "Ассеты", icon: paid },
      { label: "Торговые пары", icon: changeCircle },
      { label: "Клиентские лимиты", icon: barChart },
      { label: "Платежные системы", icon: accountBalance },
      { label: "Порог консолидации", icon: dataThresholding },
      { label: "Реквизиты платформы", icon: docs },
    ],
  },
  {
    title: "Офис:",
    items: [
      { label: "Сотрудники", icon: manageAccounts },
      { label: "Роли сотрудников", icon: personEdit },
    ],
  },
];

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
                    const isActive =
                      !!item.href && location.pathname === item.href;

                    return (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          asChild={!!item.href}
                          isActive={isActive}
                          className="h-auto gap-3 rounded-xl px-4 py-2 text-[16px] font-normal data-active:bg-primary/[0.08] data-active:text-primary"
                        >
                          {item.href ? (
                            <Link to={item.href}>
                              <img src={item.icon} alt="" className="size-6" />
                              <span>{item.label}</span>
                              {item.badge && (
                                <SidebarMenuBadge className="static ml-auto rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                                  {item.badge}
                                </SidebarMenuBadge>
                              )}
                            </Link>
                          ) : (
                            <>
                              <img src={item.icon} alt="" className="size-6" />
                              <span>{item.label}</span>
                            </>
                          )}
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
