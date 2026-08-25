import {
  ArrowLeftRight,
  BadgeAlert,
  Banknote,
  BarChartBig,
  Database,
  FileText,
  Landmark,
  LayoutDashboard,
  LineChart,
  List,
  type LucideIcon,
  UserRoundCheck,
  UserRoundCog,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  href: string;
  badge?: number;
};

export type NavGroup = {
  title?: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    items: [
      { label: "Дашборд кошельков", icon: LayoutDashboard, href: "/" },
      { label: "Курсы валют", icon: Banknote, href: "/currency-rates" },
    ],
  },
  {
    title: "Транзакции:",
    items: [
      {
        label: "На подтверждение",
        icon: BadgeAlert,
        href: "/pending-confirmation",
      },
      { label: "Список ордеров", icon: List, href: "/orders" },
    ],
  },
  {
    title: "Клиенты:",
    items: [
      {
        label: "Заявки на верификацию",
        icon: UserRoundCheck,
        href: "/verification-requests",
        badge: 5,
      },
      { label: "Список клиентов", icon: UsersRound, href: "/clients" },
    ],
  },
  {
    title: "Настройки:",
    items: [
      { label: "Ассеты", icon: Database, href: "/assets" },
      { label: "Торговые пары", icon: ArrowLeftRight, href: "/trading-pairs" },
      { label: "Клиентские лимиты", icon: BarChartBig, href: "/client-limits" },
      { label: "Платежные системы", icon: Landmark, href: "/payment-systems" },
      {
        label: "Порог консолидации",
        icon: LineChart,
        href: "/consolidation-threshold",
      },
      {
        label: "Реквизиты платформы",
        icon: FileText,
        href: "/platform-requisites",
      },
    ],
  },
  {
    title: "Офис:",
    items: [
      { label: "Сотрудники", icon: UserRoundSearch, href: "/employees" },
      {
        label: "Роли сотрудников",
        icon: UserRoundCog,
        href: "/employee-roles",
      },
    ],
  },
];
