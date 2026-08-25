import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui";

import type { VerificationRequest } from "@/entities";

type Props = {
  requests: VerificationRequest[];
};

export const VerificationRequestsTable = ({ requests }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <Table>
        <TableHeader>
          <TableRow className="h-14 border-border bg-background hover:bg-background">
            <TableHead className="text-[14px] font-medium tracking-[0.17px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                Дата обновления
                <ChevronDown className="size-[18px]" />
              </span>
            </TableHead>
            <TableHead className="text-[14px] font-medium tracking-[0.17px] text-muted-foreground">
              Название компании
            </TableHead>
            <TableHead className="text-[14px] font-medium tracking-[0.17px] text-muted-foreground">
              Email
            </TableHead>
            <TableHead className="w-[110px]">
              <span className="sr-only">Действие</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow
              key={request.id}
              className="h-[52px] border-dashed border-border last:border-b-0"
            >
              <TableCell className="text-[14px] text-foreground">
                {request.updatedAt}
              </TableCell>
              <TableCell className="truncate text-[14px] text-foreground">
                {request.companyName}
              </TableCell>
              <TableCell className="truncate text-[14px] text-foreground">
                {request.email}
              </TableCell>
              <TableCell>
                <Button size="sm" className="rounded-2xl">
                  Решение
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end gap-6 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-[12px] tracking-[0.4px] text-muted-foreground">
            Строк на странице
          </span>
          <Select defaultValue="10">
            <SelectTrigger
              size="sm"
              className="h-auto gap-0.5 border-0 p-0 text-[12px] tracking-[0.4px] shadow-none focus-visible:ring-0 [&_svg]:size-4 [&_svg]:opacity-100"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span className="text-[12px] tracking-[0.4px] text-foreground">
          1-5 из 13
        </span>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-full"
            disabled
          >
            <ChevronLeft />
          </Button>
          <Button variant="ghost" size="icon-sm" className="rounded-full">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
