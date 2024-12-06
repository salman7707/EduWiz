import { cookies } from "next/headers";
export async function POST() {
    try {
        const cookie = await cookies()
        cookie.set("auth", "", { expires: new Date(0) })
        return Response.json({ message: "cookie removed successfully " },{status:200})
    } catch (error) {
        return Response.json({ message: "cookie not Removed ",error },{status:400})
       
    }
}
