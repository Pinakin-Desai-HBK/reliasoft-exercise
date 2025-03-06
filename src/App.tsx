import Main from "./components/main/Main.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
