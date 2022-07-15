import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { NavBar } from "../components";
import { QueryClientProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: add here some sort of tracking.... segment????
  return (
    <QueryClientProvider>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
