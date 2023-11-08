import "./App.css";
import Todo from "./Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Todo />
      </QueryClientProvider>
    </>
  );
}

export default App;
