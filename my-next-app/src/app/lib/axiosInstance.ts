// src/utils/api.ts
import axios, { AxiosRequestConfig } from "axios";
import { constant } from "../utils/constant";
import { parseApiError } from "@/helper/error";

// Axios interceptors
axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error.response;
    if (response && response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Helper function to build full URL
const buildUrl = (url: string) => `${constant.API_URL}/${url}`;

// GET
const getApi = async ({ url, params }: { url: string; params?: any }) => {
  try {
    const response = await axios.get(buildUrl(url), {
      params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response;
  } catch (error: unknown) {
    console.log(error);

    throw new Error(parseApiError(error));
  }
};

// POST
const postApi = async ({
  url,
  body,
  contentType = "application/json",
}: {
  url: string;
  body: any;
  contentType?: string;
}) => {
  try {
    const response = await axios.post(buildUrl(url), body, {
      headers: { Accept: "application/json", "Content-Type": contentType },
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    console.log(error);

    throw new Error(parseApiError(error));
  }
};

// PUT
const putApi = async ({
  url,
  body,
  contentType = "application/json",
}: {
  url: string;
  body: any;
  contentType?: string;
}) => {
  try {
    const response = await axios.put(buildUrl(url), body, {
      headers: { Accept: "application/json", "Content-Type": contentType },
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    throw new Error(parseApiError(error));
  }
};

// PATCH
const patchApi = async ({
  url,
  body,
  contentType = "application/json",
}: {
  url: string;
  body: any;
  contentType?: string;
}) => {
  try {
    const response = await axios.patch(buildUrl(url), body, {
      headers: { Accept: "application/json", "Content-Type": contentType },
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    throw new Error(parseApiError(error));
  }
};

// DELETE
const deleteApi = async ({ url }: { url: string }) => {
  try {
    const response = await axios.delete(buildUrl(url), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    throw new Error(parseApiError(error));
  }
};

export { getApi, postApi, putApi, patchApi, deleteApi };
