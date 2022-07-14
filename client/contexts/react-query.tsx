import { ReactElement, ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "react-query";

interface QueryClientWrapperProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const QueryClientProvider = ({
  children,
}: QueryClientWrapperProps): ReactElement => {
  queryClient.setDefaultOptions({
    queries: {
      staleTime: 60000, // TODO: candidate for config?
    },
  });

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
