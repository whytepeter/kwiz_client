import axios, { AxiosProgressEvent } from "axios";
import apis from "./apis";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

const parseParams = async (
  params: Record<string, any>,
  extraHeaders: Record<string, any>
) => {
  const token = localStorage.getItem("token");
  const AUTH_TOKEN = `Bearer ${token}`;

  return {
    headers: {
      ...extraHeaders,
      Authorization: AUTH_TOKEN,
    },
    params: {
      ...params,
    },
  };
};

const processError = async function (e: any) {
  // TODO: add popup
  const status = e.data?.statusCode || e.status;

  if (status === 404 || e.data === "") {
    //
  }
  if (status === 401) {
    //handle logout
    console.log(e);
    //
  } else {
    //
  }
};

const apiCall = function (
  url: string,
  httpMethod: "post" | "put" | "get" | "patch" | "delete",
  body: any,
  additionalParams: Record<string, any>
) {
  switch (httpMethod) {
    case "post":
    case "put":
    case "patch":
      return axios[httpMethod](url, body, additionalParams);
    case "get":
      return axios[httpMethod](url, additionalParams);
    case "delete":
      return axios[httpMethod](url, {
        ...additionalParams,
      });
    default:
      throw new Error("Please provide a valid http method");
  }
};

const http = async <T>(
  endpoint: keyof typeof apis,
  suffix: string,
  httpMethod: "post" | "put" | "get" | "patch" | "delete",
  body: any = null,
  additionalParams: Record<string, any> = {},
  extraHeaders: Record<string, any> = {}
): Promise<T> => {
  try {
    let url = apis[endpoint];

    if (suffix) {
      url = `${url}/${suffix}`;
    }

    const { data } = await apiCall(
      url,
      httpMethod,
      body,
      await parseParams(additionalParams, extraHeaders)
    );
    return data;
  } catch (error: any) {
    if (error.message === "Network Error") {
      console.log("error", error.message);
    } else {
      processError(error.response);
    }

    throw error;
  }
};

export default http;
