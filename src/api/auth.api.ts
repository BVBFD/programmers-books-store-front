import { SignupProps } from "@/pages/Signup";
import { requestHandler } from "@/api/http";

export const signup = async (userData: SignupProps) => {
  return await requestHandler("post", "/users/sign-up", userData);
};

export const resetRequest = async (data: SignupProps) => {
  return await requestHandler("post", "/users/reset", data);
};

export const resetPassword = async (data: SignupProps) => {
  return await requestHandler("put", "/users/reset", data);
};

export const login = async (data: SignupProps) => {
  return await requestHandler("post", "/users/login", data);
};
