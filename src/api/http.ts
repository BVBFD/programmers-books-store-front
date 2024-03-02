import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "@/store/authStore";

const BASE_URL = "http://localhost:8080";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    ...config,
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      token: getToken(),
    },
    withCredentials: true,
  });

  // headers 안에 token값을 넣었음에도 불구하고 전달 안되던 문제 아래와 같이 해결
  axiosInstance.interceptors.request.use((config) => {
    config.headers.token = getToken();
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // 로그인 만료 처리
      if (error.response.status === 401) {
        removeToken();
        window.location.href = "/login";
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();

type RequestMethod = "get" | "post" | "put" | "delete";

// 공통 요청 부분
export const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  body?: T
) => {
  const response = await httpClient[method](url, body ? body : {});
  return response.data;
};

// <제레릭> 에 대해서

// function myFunction<T>(param: T): T {
//   return param;
// }

// const result: number = myFunction<number>(42);

// 위의 예제에서 myFunction은 제네릭 타입 T를 받아들이는 함수입니다.
// 함수를 호출할 때 <number>와 같이 꺽쇠 괄호(< >) 안에 특정 타입을 제공하면,
// 이는 함수의 제네릭 타입 매개변수 T에 대해 구체적으로 타입을 할당하는 것입니다.
// 이렇게 하면 함수가 호출될 때 타입이 결정되며, 함수 내부에서 사용되는 타입이 해당 타입으로 대체됩니다.
// 이는 코드 재사용성과 유연성을 높이는 데 도움이 됩니다.
