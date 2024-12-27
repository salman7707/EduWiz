import { cookies } from "next/headers";
export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();
        if (username === "salman@gmail.com" && password === "123456") {
            const cookieStore = await cookies();
            cookieStore.set({
                name: "auth",
                value: username,
                httpOnly: true,
                secure: true,
                sameSite: true,
                path: "/",
            })
            return Response.json({ message: "User Login Successfully and also token created Successfully" }, { status: 200 });
        } else {
            return Response.json({ message: "error in set a cookie or data will not coming correctly" }, { status: 401 })
        }
    } catch (error) {
        return Response.json({ message: "Error Parsing Request Data", error }, { status: 400 })
    }

}
