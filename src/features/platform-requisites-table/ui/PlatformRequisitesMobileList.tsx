import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/shared/ui";

import type { PlatformRequisite } from "@/entities";

type Props = {
  requisites: PlatformRequisite[];
};

export const PlatformRequisitesMobileList = ({ requisites }: Props) => {
  return (
    <div className="flex flex-col md:hidden">
      <div className="flex flex-col">
        {requisites.map((requisite) => (
          <div
            key={requisite.id}
            className="flex w-full flex-col gap-1 border-b border-border px-4 py-3.5"
          >
            <div className="flex items-center justify-between text-sm text-foreground">
              <p className="truncate font-semibold">{requisite.name}</p>
              <p className="truncate">{requisite.currency}</p>
            </div>
            <div className="text-sm text-foreground">
              <p>Номер счёта: {requisite.accountNumber}</p>
              <p>БИК: {requisite.bik}</p>
            </div>
            <div className="flex h-9 items-center justify-between pt-1">
              <p className="text-sm text-foreground">{requisite.updatedAt}</p>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-primary hover:text-primary"
              >
                Детали
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-[60px] w-full items-center justify-center gap-4 border-t border-border px-4 pt-4 pb-6">
        <span className="text-sm font-medium text-foreground">1-5 из 13</span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full opacity-50"
            disabled
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full opacity-50"
            disabled
          >
            <ChevronsLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronsRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
