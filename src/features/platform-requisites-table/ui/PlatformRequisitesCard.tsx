import { useMemo, useState } from "react";

import { Button } from "@/shared/ui";

import { platformRequisitesMock } from "../model/mock";
import { PlatformRequisitesMobileList } from "./PlatformRequisitesMobileList";
import { PlatformRequisitesTable } from "./PlatformRequisitesTable";
import { PlatformRequisitesToolbar } from "./PlatformRequisitesToolbar";

const currencies = Array.from(
  new Set(platformRequisitesMock.map((item) => item.currency)),
);

export const PlatformRequisitesCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currency, setCurrency] = useState<string | undefined>(undefined);

  const requisites = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return platformRequisitesMock.filter(
      (item) =>
        (!currency || item.currency === currency) &&
        (!query || item.name.toLowerCase().includes(query)),
    );
  }, [searchValue, currency]);

  const handleReset = () => {
    setSearchValue("");
    setCurrency(undefined);
  };

  return (
    <div className="flex w-full flex-1 flex-col gap-3 md:gap-6">
      <div className="flex flex-col gap-3 px-4 md:px-0">
        <Button className="h-9 w-full rounded-full shadow-xs md:hidden">
          Добавить реквизиты
        </Button>
        <PlatformRequisitesToolbar
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          currency={currency}
          onCurrencyChange={setCurrency}
          onReset={handleReset}
          currencies={currencies}
        />
      </div>
      <PlatformRequisitesMobileList requisites={requisites} />
      <div className="hidden md:block">
        <PlatformRequisitesTable requisites={requisites} />
      </div>
    </div>
  );
};
