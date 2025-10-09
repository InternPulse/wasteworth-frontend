import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient();

queryClient.getQueryCache().subscribe((event) => {
  if (event.type === "updated" && event.action.type === "failed") {
    const error = event.query.state.error;
    console.error("Query failed", error);
  }
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
       <ToastContainer />
    </QueryClientProvider>
  </BrowserRouter>
);
