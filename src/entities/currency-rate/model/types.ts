export type CurrencyCategory = "fiat" | "crypto";

export type CurrencyRate = {
  id: string;
  pair: string;
  category: CurrencyCategory;
  buyRate: string;
  sellRate: string;
};
