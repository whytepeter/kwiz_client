import axios from "axios";
import apis from "./apis";
import Cookies from "js-cookie";
import { signOutAction } from "@/store/actions/auth";
import { NextRouter } from "next/router";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const parseParams = async (
  params: Record<string, any>,
  extraHeaders: Record<string, any>
) => {
  const token = Cookies.get("authToken");
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
    console.log(e);
    signOutAction();
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
  httpMethod: "post" | "put" | "get" | "patch" | "delete",
  body: any = null,
  options?: {
    suffix?: string;
    additionalParams?: Record<string, any>;
    extraHeaders?: Record<string, any>;
  }
): Promise<any> => {
  const defaultOptions = {
    suffix: "",
    additionalParams: {},
    extraHeaders: {},
    ...options,
  };

  try {
    let url = apis[endpoint];

    if (defaultOptions?.suffix) {
      url = `${url}/${defaultOptions?.suffix}`;
    }

    const { data } = await apiCall(
      url,
      httpMethod,
      body,
      await parseParams(
        defaultOptions?.additionalParams,
        defaultOptions?.extraHeaders
      )
    );
    return data;
  } catch (error: any) {
    if (error.message === "Network Error") {
      console.log("error", error.message);
      throw error;
    } else {
      processError(error.response);
    }
    throw error?.response?.data || error?.response;
  }
};

export default http;
