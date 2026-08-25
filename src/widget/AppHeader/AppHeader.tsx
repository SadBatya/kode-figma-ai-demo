import { Menu } from "lucide-react";

import logoMainex from "@/shared/assets/icons/logo-mainex.svg";
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
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-card px-4 md:h-16 md:px-8">
      {/* Mobile topbar */}
      <div className="flex w-full items-center gap-3 md:hidden">
        <MobileMenuTrigger />
        <h1 className="flex-1 truncate text-[18px] leading-6 font-bold text-foreground">
          {title}
        </h1>
        <Avatar className="size-8 shrink-0">
          <AvatarFallback className="bg-[#bdbdbd] text-[13px] text-white">
            ИИ
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Desktop topbar */}
      <div className="hidden flex-1 items-center gap-4 md:flex">
        <img src={logoMainex} alt="Mainex" className="h-[18px] w-[107px]" />
      </div>
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex flex-col items-end text-right">
          <p className="text-[16px] leading-[1.5] tracking-[0.15px] text-foreground">
            Иван Иванович
          </p>
          <p className="text-[12px] leading-[1.66] tracking-[0.4px] text-muted-foreground">
            Администратор
          </p>
        </div>

        <div className="relative shrink-0">
          <Avatar className="size-10">
            <AvatarFallback className="bg-[#bdbdbd] text-[20px] tracking-[0.14px] text-white">
              ИИ
            </AvatarFallback>
          </Avatar>
          <span className="absolute -right-0.5 -bottom-0.5 block size-3 rounded-full bg-[#51a136] ring-2 ring-white" />
        </div>
      </div>
    </header>
  );
};
