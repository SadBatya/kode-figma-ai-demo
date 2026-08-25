import { Search } from "lucide-react";

import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";

import type { CurrencyCategory } from "@/entities";

type Props = {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  category: CurrencyCategory;
  onCategoryChange: (category: CurrencyCategory) => void;
};

const categoryOptions: { value: CurrencyCategory; label: string }[] = [
  { value: "fiat", label: "Фиат" },
  { value: "crypto", label: "Крипто" },
];

export const CurrencyRatesToolbar = ({
  searchValue,
  onSearchValueChange,
  category,
  onCategoryChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <div className="flex w-full items-center overflow-hidden rounded-full border border-input shadow-xs md:w-[380px]">
        <Input
          value={searchValue}
          onChange={(event) => onSearchValueChange(event.target.value)}
          placeholder="Поиск по валюте"
          className="h-9 flex-1 rounded-none border-0 border-r border-input px-3 py-1 text-[16px] shadow-none focus-visible:ring-0"
        />
        <div className="flex size-9 shrink-0 items-center justify-center">
          <Search className="size-4 text-foreground" />
        </div>
      </div>

      <div className="flex h-9 w-fit items-center justify-center rounded-full bg-muted p-[3px]">
        {categoryOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onCategoryChange(option.value)}
            className={cn(
              "flex h-[29px] items-center justify-center rounded-full px-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors",
              option.value === category &&
                "border border-border bg-background shadow-xs",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
