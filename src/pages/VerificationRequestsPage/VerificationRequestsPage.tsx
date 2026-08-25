import { VerificationRequestsCard } from "@/features";
import { AppLayout } from "@/widget";

const TITLE = "Заявки на верификацию";

export const VerificationRequestsPage = () => {
  return (
    <AppLayout title={TITLE}>
      <div className="flex flex-col items-start md:px-[100px] md:py-6">
        <h1 className="hidden w-full pt-4 pb-6 text-[34px] leading-[1.235] font-medium tracking-[0.25px] text-foreground md:block">
          {TITLE}
        </h1>
        <VerificationRequestsCard />
      </div>
    </AppLayout>
  );
};
