import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "../shared/loading/Loading";

const client = new QueryClient();

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;
