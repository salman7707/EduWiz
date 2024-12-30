import { LoginUser } from "@/lib/store/authSlice";
import { AppDispatch } from "@/lib/store/store";
import { loginusertype } from "@/types/LoginUserType";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const dologin = async (values: loginusertype) => {
    try {
      setLoading(true);
      console.log("🚀 ~ values", values);
      const action = await dispatch(LoginUser(values));
      console.log("🚀 ~ doLogin ~ action", action);
      console.log("action.payload", action.payload.success);
      if (action.payload.success) {
        Cookies.set("auth", action.payload.data.email, { secure: true, sameSite: 'strict' })
        toast.success(action.payload.message, { position: "top-right", autoClose: 3000, })
        router.push("/dashboard")
      } else {
        toast.error(action.payload.message, { position: "top-right", autoClose: 3000, })
      }
    } catch (error) {
      console.log("Problem inside the useLogin", error);
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
