import logoMainex from "@/shared/assets/icons/logo-mainex.svg";
import { Avatar, AvatarFallback } from "@/shared/ui";

export const AppHeader = () => {
  return (
    <header className="flex h-16 w-full shrink-0 items-center border-b border-border bg-card px-8">
      <div className="flex flex-1 items-center gap-4">
        <img src={logoMainex} alt="Mainex" className="h-[18px] w-[107px]" />
      </div>

      <div className="flex items-center gap-2">
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
