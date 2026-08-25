import { Menu } from "lucide-react";

import { Avatar, AvatarFallback, useSidebar } from "@/shared/ui";

type Props = {
  title?: string;
};

const MobileMenuTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="flex size-6 shrink-0 items-center justify-center text-foreground"
    >
      <Menu className="size-6" />
      <span className="sr-only">Открыть меню</span>
    </button>
  );
};

export const AppHeader = ({ title }: Props) => {
  return (
    <header className="flex h-14 w-full shrink-0 items-center gap-3 border-b border-border bg-background px-4 md:hidden">
      <MobileMenuTrigger />
      <h1 className="flex-1 truncate text-[18px] leading-6 font-bold text-foreground">
        {title}
      </h1>
      <Avatar className="size-8 shrink-0">
        <AvatarFallback className="bg-[#bdbdbd] text-[13px] text-white">
          ИИ
        </AvatarFallback>
      </Avatar>
    </header>
  );
};
