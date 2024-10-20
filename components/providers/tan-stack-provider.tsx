"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type TanstackProviderPops = {
  children: React.ReactNode;
};

export function TanstackProvider({ children }: TanstackProviderPops) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
