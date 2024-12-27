import { LoginUser } from "@/lib/store/authSlice";
import { signupusertype } from "@/types/SignupUserTypes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const dologin = async (values: signupusertype) => {
    try {
      setLoading(true);
      console.log("🚀 ~ values", values);
      const { email, password } = values;
      const action = dispatch(LoginUser(values));
      console.log("🚀 ~ doLogin ~ action", action);
      console.log("action.payload", action.payload);
      if (action.payload) {
        const res = await fetch("https://api-eduwiz.vercel.app/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.success) {
          console.log("DoLogin Send Data");
          Cookies.set("auth", email, {
            secure: true,
            sameSite: "strict",
            path: "/",
          });
          router.push("/dashboard");
        } else {
          console.log("Error In Sending Data From DoLogin");
        }
      }
    } catch (error) {
      console.log("User Login Successfully", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    setLoading,
    dologin,
  };
};
export default useLogin;
