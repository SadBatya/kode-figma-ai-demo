import { Search } from "lucide-react";

import searchIcon from "@/shared/assets/icons/search.svg";
import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";

export type SearchField = "email" | "name";

type Props = {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  searchField: SearchField;
  onSearchFieldChange: (field: SearchField) => void;
};

const fieldOptions: { value: SearchField; label: string }[] = [
  { value: "email", label: "По email" },
  { value: "name", label: "По названию" },
];

export const VerificationRequestsToolbar = ({
  searchValue,
  onSearchValueChange,
  searchField,
  onSearchFieldChange,
}: Props) => {
  const placeholder =
    searchField === "email" ? "Поиск по email" : "Поиск по названию";

  return (
    <div className="flex flex-col gap-3 p-4 md:pt-6 md:pb-8">
      {/* Mobile search field */}
      <div className="flex items-center overflow-hidden rounded-full border border-input shadow-xs md:hidden">
        <Input
          value={searchValue}
          onChange={(event) => onSearchValueChange(event.target.value)}
          placeholder={placeholder}
          className="h-9 flex-1 rounded-none border-0 border-r border-input px-3 py-1 text-[16px] shadow-none focus-visible:ring-0"
        />
        <div className="flex size-9 shrink-0 items-center justify-center">
          <Search className="size-4 text-foreground" />
        </div>
      </div>

      {/* Desktop search field */}
      <div className="hidden items-center gap-4 rounded-2xl border border-input px-3 has-focus-within:border-ring has-focus-within:ring-3 has-focus-within:ring-ring/50 md:flex">
        <img src={searchIcon} alt="" className="size-6 shrink-0" />
        <Input
          value={searchValue}
          onChange={(event) => onSearchValueChange(event.target.value)}
          placeholder={placeholder}
          className="h-14 border-0 bg-transparent px-0 text-[16px] shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
        />
      </div>

      {/* Mobile tabs */}
      <div className="flex h-9 w-fit items-center justify-center rounded-full bg-muted p-[3px] md:hidden">
        {fieldOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSearchFieldChange(option.value)}
            className={cn(
              "flex h-[29px] items-center justify-center rounded-full px-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors",
              option.value === searchField &&
                "border border-border bg-background shadow-xs",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Desktop tabs */}
      <div className="hidden items-start gap-3 md:flex">
        {fieldOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSearchFieldChange(option.value)}
            className={cn(
              "rounded-full px-3 py-1.5 text-[13px] font-medium tracking-[0.16px] transition-colors",
              option.value === searchField
                ? "bg-neutral-800 text-white"
                : "bg-black/[0.08] text-foreground hover:bg-black/[0.12]",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
