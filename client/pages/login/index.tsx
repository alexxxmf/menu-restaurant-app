import type { NextPage } from "next";
import { LoginForm } from "../../components";
import { loginHooks } from "./hooks";

const Login: NextPage = () => {
  const { login, isError, isLoading, data } = loginHooks.useLogin();
  if (isError) {
    return <p>error</p>;
  }
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
