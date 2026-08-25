import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

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

import type { PlatformRequisite } from "@/entities";

type Props = {
  requisites: PlatformRequisite[];
};

export const PlatformRequisitesTable = ({ requisites }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-3xl border border-border">
        <Table>
          <TableHeader>
            <TableRow className="h-10 border-border bg-muted hover:bg-muted">
              <TableHead className="text-[14px] font-medium text-foreground">
                Название
              </TableHead>
              <TableHead className="text-[14px] font-medium text-foreground">
                Валюта реквизитов
              </TableHead>
              <TableHead className="text-[14px] font-medium text-foreground">
                Данные счета
              </TableHead>
              <TableHead className="text-[14px] font-medium text-foreground">
                Дата изменения
              </TableHead>
              <TableHead className="w-[99px]">
                <span className="sr-only">Действие</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requisites.map((requisite) => (
              <TableRow
                key={requisite.id}
                className="h-[53px] border-border last:border-b-0"
              >
                <TableCell className="text-right text-[14px] text-foreground">
                  {requisite.name}
                </TableCell>
                <TableCell className="text-right text-[14px] text-foreground">
                  {requisite.currency}
                </TableCell>
                <TableCell className="text-right text-[14px] text-foreground">
                  <p>Номер счёта: {requisite.accountNumber}</p>
                  <p>БИК: {requisite.bik}</p>
                </TableCell>
                <TableCell className="text-right text-[14px] text-foreground">
                  {requisite.updatedAt}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-primary hover:text-primary"
                  >
                    Детали
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end gap-8">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-medium text-foreground">
            Строк на странице
          </span>
          <Select defaultValue="10">
            <SelectTrigger
              size="sm"
              className="h-9 w-[80px] rounded-full border-input px-3 shadow-xs focus-visible:ring-0"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span className="text-[14px] font-medium text-foreground">
          1-5 из 13
        </span>

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
