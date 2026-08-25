import { CurrencyRatesCard } from "@/features";
import { AppLayout } from "@/widget";

const TITLE = "Курсы валют";

export const CurrencyRatesPage = () => {
  return (
    <AppLayout title={TITLE}>
      <div className="flex flex-col items-start gap-6 md:px-11 md:pt-8 md:pb-6">
        <h1 className="hidden w-full text-[36px] leading-[40px] font-bold text-foreground md:block">
          {TITLE}
        </h1>
        <CurrencyRatesCard />
      </div>
    </AppLayout>
  );
};
