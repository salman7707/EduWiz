import { SignUpUser } from "@/lib/store/authSlice";
import { signupusertype } from "@/types/SignupUserTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useSignup = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const doSignUp = async (values: signupusertype) => {
        console.log(values)
        try {
            setLoading(true)
            const action = dispatch(SignUpUser(values))
            console.log("🚀 ~ action", action)
            if (action.payload) {
                const { email, password } = values
                const res = await fetch("https://api-eduwiz.vercel.app/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({ email, password })
                })
                const data = await res.json();
                if (data.success) {
                    console.log("Send Data To Api")
                    router.push("/login")
                } else {
                    console.log("Data Not Sended")
                }
            }
            else {
                console.log("Error In sending data")
            }
        } catch (error) {
            console.log("Error in DoSignup", error)
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