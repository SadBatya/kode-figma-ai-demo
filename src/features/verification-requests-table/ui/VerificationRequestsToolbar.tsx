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
  return (
    <div className="flex flex-col gap-3 px-4 pt-6 pb-8">
      <div className="flex items-center gap-4 rounded-2xl border border-input px-3 has-focus-within:border-ring has-focus-within:ring-3 has-focus-within:ring-ring/50">
        <img src={searchIcon} alt="" className="size-6 shrink-0" />
        <Input
          value={searchValue}
          onChange={(event) => onSearchValueChange(event.target.value)}
          placeholder={
            searchField === "email" ? "Поиск по email" : "Поиск по названию"
          }
          className="h-14 border-0 bg-transparent px-0 text-[16px] shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
        />
      </div>

      <div className="flex items-start gap-3">
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
