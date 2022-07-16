import axios, { AxiosRequestConfig, Method } from "axios";

const createAPIRequestFunction = (method: Method) => {
  // TODO: perhaps we need to enhance this to handle erros and throw
  // non JSON responses and all that stuff
  return async (url: string, options: AxiosRequestConfig) => {
    const axiosRequestOptions: AxiosRequestConfig = {
      url,
      method,
      ...options,
    };

    const response = await axios(axiosRequestOptions);

    return response;
  };
};

export const get = createAPIRequestFunction("get");
export const post = createAPIRequestFunction("post");
export const del = createAPIRequestFunction("delete");
export const patch = createAPIRequestFunction("patch");
export const put = createAPIRequestFunction("put");
