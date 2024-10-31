import "./App.scss";
import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  return (
    <>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Dashboard />
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
      );
    </>
  );
}

export default App;
