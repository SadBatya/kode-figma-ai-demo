import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/shared/ui";

import type { VerificationRequest } from "@/entities";

type Props = {
  requests: VerificationRequest[];
};

export const VerificationRequestsMobileList = ({ requests }: Props) => {
  return (
    <div className="flex flex-col md:hidden">
      <div className="flex flex-col">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex h-[112px] w-full flex-col gap-1 border-b border-border px-4 py-3.5"
          >
            <p className="truncate text-sm font-semibold text-foreground">
              {request.companyName}
            </p>
            <p className="truncate text-sm text-foreground">{request.email}</p>
            <div className="flex h-9 items-center justify-between pt-1">
              <p className="text-sm text-foreground">{request.updatedAt}</p>
              <Button size="sm" className="rounded-full">
                Решение
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
