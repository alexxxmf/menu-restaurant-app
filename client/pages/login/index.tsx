import { useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { LoginForm } from "../../components";
import { loginHooks } from "./hooks";

const Login: NextPage = () => {
  const toast = useToast();
  const router = useRouter();
  const toastRef = useRef(toast);
  const routerRef = useRef(router);
  const { login, isError, isLoading, data, isSuccess } = loginHooks.useLogin();

  useEffect(() => {
    if (isError) {
      toastRef.current({
        title: "There was an error",
        description: "Please try to login later",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    if (isSuccess) {
      routerRef.current.push("/");
      toastRef.current({
        title: "Successfully logged yourself in",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isError, isSuccess]);

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <LoginForm
        onSubmitHandler={({ email, password }) => {
          login({ email, password });
        }}
      />
    </div>
  );
};

export default Login;
