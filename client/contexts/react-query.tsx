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
  queryClient.setDefaultOptions({});

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
