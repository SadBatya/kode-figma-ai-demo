import { Construction } from "lucide-react";

import { AppLayout } from "@/widget";

type Props = {
  title: string;
};

export const StubPage = ({ title }: Props) => {
  return (
    <AppLayout title={title}>
      <div className="flex flex-col items-start md:px-[100px] md:py-6">
        <h1 className="hidden w-full pt-4 pb-6 text-[34px] leading-[1.235] font-medium tracking-[0.25px] text-foreground md:block">
          {title}
        </h1>

        <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 py-24 text-center md:rounded-3xl md:bg-card md:py-32">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/[0.08]">
            <Construction className="size-7 text-primary" />
          </div>
          <div className="flex flex-col gap-1 px-6">
            <p className="text-[16px] font-medium text-foreground">
              Раздел «{title}» в разработке
            </p>
            <p className="text-sm text-muted-foreground">
              Эта страница появится в одном из следующих обновлений
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
