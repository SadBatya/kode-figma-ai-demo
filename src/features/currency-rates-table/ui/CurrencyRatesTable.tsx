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

import type { CurrencyRate } from "@/entities";

type Props = {
  rates: CurrencyRate[];
};

export const CurrencyRatesTable = ({ rates }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-3xl border border-border">
        <Table>
          <TableHeader>
            <TableRow className="h-10 border-border bg-muted hover:bg-muted">
              <TableHead className="text-[14px] font-medium text-foreground">
                Валюта
              </TableHead>
              <TableHead className="text-[14px] font-medium text-foreground">
                Курс покупки
              </TableHead>
              <TableHead className="text-[14px] font-medium text-foreground">
                Курс продажи
              </TableHead>
              <TableHead className="w-[110px]">
                <span className="sr-only">Действие</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate) => (
              <TableRow
                key={rate.id}
                className="h-[53px] border-border last:border-b-0"
              >
                <TableCell className="text-right text-[14px] text-foreground">
                  {rate.pair}
                </TableCell>
                <TableCell className="text-right text-[14px] text-foreground">
                  {rate.buyRate}
                </TableCell>
                <TableCell className="text-right text-[14px] text-foreground">
                  {rate.sellRate}
                </TableCell>
                <TableCell>
                  <Button size="sm" className="rounded-full shadow-xs">
                    Изменить
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
