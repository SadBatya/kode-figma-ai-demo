import type { CurrencyRate } from "@/entities";

export const currencyRatesMock: CurrencyRate[] = [
  {
    id: "1",
    pair: "USD / RUB",
    category: "fiat",
    buyRate: "79,20 ₽",
    sellRate: "80,10 ₽",
  },
  {
    id: "2",
    pair: "EUR / RUB",
    category: "fiat",
    buyRate: "92,40 ₽",
    sellRate: "93,60 ₽",
  },
  {
    id: "3",
    pair: "CNY / RUB",
    category: "fiat",
    buyRate: "11,05 ₽",
    sellRate: "11,30 ₽",
  },
  {
    id: "4",
    pair: "USDT / RUB",
    category: "crypto",
    buyRate: "80,50 ₽",
    sellRate: "81,20 ₽",
  },
  {
    id: "5",
    pair: "BTC / RUB",
    category: "crypto",
    buyRate: "8 950 000 ₽",
    sellRate: "9 020 000 ₽",
  },
  {
    id: "6",
    pair: "ETH / RUB",
    category: "crypto",
    buyRate: "305 000 ₽",
    sellRate: "308 500 ₽",
  },
  {
    id: "7",
    pair: "TON / RUB",
    category: "crypto",
    buyRate: "480 ₽",
    sellRate: "490 ₽",
  },
  {
    id: "8",
    pair: "BNB / RUB",
    category: "crypto",
    buyRate: "62 500 ₽",
    sellRate: "63 200 ₽",
  },
  {
    id: "9",
    pair: "XRP / RUB",
    category: "crypto",
    buyRate: "195 ₽",
    sellRate: "199 ₽",
  },
  {
    id: "10",
    pair: "SOL / RUB",
    category: "crypto",
    buyRate: "14 200 ₽",
    sellRate: "14 450 ₽",
  },
];
