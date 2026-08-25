import { Search } from "lucide-react";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

type Props = {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  currency: string | undefined;
  onCurrencyChange: (currency: string | undefined) => void;
  onReset: () => void;
  currencies: string[];
};

export const PlatformRequisitesToolbar = ({
  searchValue,
  onSearchValueChange,
  currency,
  onCurrencyChange,
  onReset,
  currencies,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <div className="flex w-full items-center overflow-hidden rounded-full border border-input shadow-xs md:w-[380px]">
        <Input
          value={searchValue}
          onChange={(event) => onSearchValueChange(event.target.value)}
          placeholder="Поиск по названию"
          className="h-9 flex-1 rounded-none border-0 border-r border-input px-3 py-1 text-[16px] shadow-none focus-visible:ring-0"
        />
        <div className="flex size-9 shrink-0 items-center justify-center">
          <Search className="size-4 text-foreground" />
        </div>
      </div>

      <Select value={currency} onValueChange={onCurrencyChange}>
        <SelectTrigger className="h-9 w-full rounded-full border-input px-3 shadow-xs focus-visible:ring-0 md:w-[180px]">
          <SelectValue placeholder="Валюта реквизитов" />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="secondary"
        onClick={onReset}
        className="h-9 w-full rounded-full shadow-xs md:w-fit"
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};
