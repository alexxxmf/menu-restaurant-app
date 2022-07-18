import { useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { LoginForm } from "../../components";
import { loginHooks } from "./hooks";

const Login: NextPage = () => {
  const toast = useToast();
  const router = useRouter();
  // TODO: is it preferable this or instead, perhaps adding this into deps for
  // the useEffect down below
  const toastRef = useRef(toast);
  const routerRef = useRef(router);
  const { login, isError, isLoading, data, isSuccess } = loginHooks.useLogin();

  // TODO: perhaps move this into a onSuccess and onError handlerrs that we pass to reqct query??

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

  // TODO: perhaps adding some extra props to login form so we can
  // show a spinner, disable the button or perhaps a dynamic gradient showing
  // button is doing something behind the scenes
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
