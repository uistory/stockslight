import { API_KEY } from "../api";
import { StockRequestParams } from "./types/StockRequestParams";
import { StockResponse } from "./types/StockResponse";

export const BASE_URL = "https://api.marketstack.com/v1/eod?";

export const fetchStockListData = async (
  params: StockRequestParams
): Promise<StockResponse> => {
  const { symbol, dateFrom, dateTo } = params;
  const url = `${BASE_URL}symbols=${symbol}&date_from=${dateFrom}&date_to=${dateTo}&access_key=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
