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
import manageAccounts from "@/shared/assets/icons/manage-accounts.svg";
import paid from "@/shared/assets/icons/paid.svg";
import personEdit from "@/shared/assets/icons/person-edit.svg";
import spaceDashboard from "@/shared/assets/icons/space-dashboard.svg";

export type NavItem = {
  label: string;
  icon: string;
  href: string;
  badge?: number;
  /** Real, fully implemented page. Everything else renders as a stub. */
  implemented?: boolean;
};

export type NavGroup = {
  title?: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    items: [
      { label: "Дашборд кошельков", icon: spaceDashboard, href: "/" },
      { label: "Курсы валют", icon: currencyExchange, href: "/currency-rates" },
    ],
  },
  {
    title: "Транзакции:",
    items: [
      {
        label: "На подтверждение",
        icon: assignmentLate,
        href: "/pending-confirmation",
      },
      { label: "Список ордеров", icon: listAlt, href: "/orders" },
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
        implemented: true,
      },
      { label: "Список клиентов", icon: group, href: "/clients" },
    ],
  },
  {
    title: "Настройки:",
    items: [
      { label: "Ассеты", icon: paid, href: "/assets" },
      { label: "Торговые пары", icon: changeCircle, href: "/trading-pairs" },
      { label: "Клиентские лимиты", icon: barChart, href: "/client-limits" },
      {
        label: "Платежные системы",
        icon: accountBalance,
        href: "/payment-systems",
      },
      {
        label: "Порог консолидации",
        icon: dataThresholding,
        href: "/consolidation-threshold",
      },
      {
        label: "Реквизиты платформы",
        icon: docs,
        href: "/platform-requisites",
      },
    ],
  },
  {
    title: "Офис:",
    items: [
      { label: "Сотрудники", icon: manageAccounts, href: "/employees" },
      { label: "Роли сотрудников", icon: personEdit, href: "/employee-roles" },
    ],
  },
];
