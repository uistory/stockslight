import { Nullable } from "./";

export interface Pagination {
  limit: Nullable<number>;
  offset: Nullable<number>;
  count: Nullable<number>;
  total: Nullable<number>;
}

export interface StockData {
  open: Nullable<number>;
  high: Nullable<number>;
  low: Nullable<number>;
  close: Nullable<number>;
  volume: Nullable<number>;
  adj_high: Nullable<number>;
  adj_low: Nullable<number>;
  adj_close: Nullable<number>;
  adj_open: Nullable<number>;
  adj_volume: Nullable<number>;
  split_factor: Nullable<number>;
  dividend: Nullable<number>;
  symbol: Nullable<string>;
  exchange: Nullable<string>;
  date: Nullable<string>; // Use Date if you prefer to parse it as a date object
}

export interface StockResponse {
  pagination: Pagination;
  data: StockData[];
}
