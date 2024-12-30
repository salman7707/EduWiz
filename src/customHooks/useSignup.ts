import { SignUpUser } from "@/lib/store/authSlice";
import { AppDispatch } from "@/lib/store/store";
import { signupusertype } from "@/types/SignupUserTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useSignup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const doSignUp = async (values: signupusertype) => {
        console.log(values)
        try {
            setLoading(true)
            const action = await dispatch(SignUpUser(values))
            console.log("🚀 ~ action", action)
            console.log("🚀 ~ action.payload", action.payload)
            if (action.payload.success) {
                console.log("Going to Login")
                toast.success(action.payload.message, { position: "top-right", autoClose: 3000 })
                router.push("/login")
            } else {
                toast.error(action.payload.message, { position: "top-right", autoClose: 3000 })
            }
        } catch (error) {
            console.log("🚀 ~ Error in DoSignup", error)
        } finally {
            setLoading(false)
        }
    }
    return {
        doSignUp,
        loading,
        setLoading,
    }
}
export default useSignup;