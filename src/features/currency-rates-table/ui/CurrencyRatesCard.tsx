import { useMemo, useState } from "react";

import { currencyRatesMock } from "../model/mock";
import { CurrencyRatesMobileList } from "./CurrencyRatesMobileList";
import { CurrencyRatesTable } from "./CurrencyRatesTable";
import { CurrencyRatesToolbar } from "./CurrencyRatesToolbar";

import type { CurrencyCategory } from "@/entities";

export const CurrencyRatesCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState<CurrencyCategory>("fiat");

  const rates = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return currencyRatesMock.filter(
      (rate) =>
        rate.category === category &&
        (!query || rate.pair.toLowerCase().includes(query)),
    );
  }, [searchValue, category]);

  return (
    <div className="flex w-full flex-1 flex-col gap-3 md:gap-6">
      <div className="px-4 md:px-0">
        <CurrencyRatesToolbar
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          category={category}
          onCategoryChange={setCategory}
        />
      </div>
      <CurrencyRatesMobileList rates={rates} />
      <div className="hidden md:block">
        <CurrencyRatesTable rates={rates} />
      </div>
    </div>
  );
};
