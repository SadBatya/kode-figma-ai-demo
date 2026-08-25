import { PlatformRequisitesCard } from "@/features";
import { Button } from "@/shared/ui";
import { AppLayout } from "@/widget";

const TITLE = "Реквизиты платформы";

export const PlatformRequisitesPage = () => {
  return (
    <AppLayout title={TITLE}>
      <div className="flex flex-col items-start gap-6 md:px-11 md:pt-8 md:pb-6">
        <div className="hidden w-full items-center gap-6 md:flex">
          <h1 className="flex-1 text-[36px] leading-[40px] font-bold text-foreground">
            {TITLE}
          </h1>
          <Button className="h-9 rounded-full shadow-xs">
            Добавить реквизиты
          </Button>
        </div>
        <PlatformRequisitesCard />
      </div>
    </AppLayout>
  );
};
