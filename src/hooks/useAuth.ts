import { useState } from "react";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";

export const useAuth = () => {
  // 상태
  const navigate = useNavigate();
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();

  // 메소드
  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        showAlert("로그인 완료되었습니다.");
        navigate("/");
      },
      () => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then(() => {
      showAlert("회원가입이 완료되었습니다.");
      navigate("/login");
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    });
  };

  // 리턴
  return {
    userLogin,
    userSignup,
    resetRequested,
    userResetPassword,
    userResetRequest,
  };
};
