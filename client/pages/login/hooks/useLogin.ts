import axios from "axios";
import { useMutation, useQuery } from "react-query";
// import { login } from '../../../services';

interface LoginResponse {
  authToken: string;
  expiration: {
    time: number;
    unit: string;
  };
}

const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    "http://localhost:8080/api/user/login",
    {
      email,
      password,
    }
  );

  return response.data;
};

export const useLogin = () => {
  const { mutate, data, isLoading, isError, isSuccess } = useMutation<
    LoginResponse,
    undefined,
    { email: string; password: string }
  >("login", ({ email, password }) => login(email, password), {
    onSuccess: () => console.log("success"),
  });

  return {
    login: mutate,
    data,
    isError,
    isLoading,
    isSuccess,
  };
};
