import { VerificationRequestsCard } from "@/features";
import { AppLayout } from "@/widget";

export const VerificationRequestsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col items-start px-[100px] py-6">
        <h1 className="w-full pt-4 pb-6 text-[34px] leading-[1.235] font-medium tracking-[0.25px] text-foreground">
          Заявки на верификацию
        </h1>
        <VerificationRequestsCard />
      </div>
    </AppLayout>
  );
};
