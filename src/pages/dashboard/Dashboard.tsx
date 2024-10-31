import StockTable from "./components/StockTable/StockTable";

export function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <StockTable></StockTable>
      </div>
    </>
  );
}
