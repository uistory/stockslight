import { useQuery } from "@tanstack/react-query";
import { fetchStockListData } from "../../../../api/stock/stockApi";
import { StockRequestParams } from "../../../../api/stock/types/StockRequestParams";

export const useStockList = (params: StockRequestParams) =>
  useQuery({
    queryKey: ["stockList"],
    queryFn: () => fetchStockListData(params),
  });
