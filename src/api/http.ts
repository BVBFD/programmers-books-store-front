import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwNDhkZWU5OC0zYjVhLTRhM2QtODZhOS02N2JlMTgxY2M0ZTAiLCJlbWFpbCI6IjEyMzQ1NkBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0yNiAwMDoxNTo1OSIsInVwZGF0ZWRfYXQiOiIyMDI0LTAyLTI2IDAwOjE1OjU5IiwiaWF0IjoxNzA4OTA2NzQwLCJleHAiOjE3MDg5OTMxNDAsImlzcyI6IkxlZSBTZW9uZyBFdW4ifQ.ar_Q6ZTWlvq2VW-hn-oLWqJ7iND6FEBBHtiXIREaark",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
