import axios, { AxiosRequestConfig, Method } from "axios";
import { config } from "../config";

const createAPIRequestFunction = (method: Method) => {
  // TODO: perhaps we need to enhance this to handle erros and throw
  // non JSON responses and all that stuff
  return async (url: string, options: AxiosRequestConfig) => {
    const axiosRequestOptions: AxiosRequestConfig = {
      ...options,
      url,
      method,
      baseURL: config.baseUrl,
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
